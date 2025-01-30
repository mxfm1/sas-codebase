import NextAuth, { User } from "next-auth";
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { getUserByEmail, getUserById } from "./use-cases/users";
import bcrypt from 'bcryptjs'
import { db } from "./db";

import CredentialsProvider from "next-auth/providers/credentials";

export const {handlers, auth, signIn,signOut} = NextAuth({
    adapter: DrizzleAdapter(db),
    providers : [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    return null
                }

                const user = await getUserByEmail(credentials.email as string)
                if(!user) return null

                const isValidPassword = await bcrypt.compare(credentials.password as string, user.password!);
                if (!isValidPassword) return null;

                

                return {
                    id:user.id,
                    name: user.name,
                    email:user.email,
                    role: user.role as "ADMIN" | "USER"
                } as User
            }
        })
    ],
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    callbacks: {
        async session({token,session}){
            if(token.sub && session.user){
                session.user.id = token.sub
            }

            if(token.role && session.user){
                session.user.role = token.role as "ADMIN" | "USER";
            }
            return session
        },
        async jwt({token}){
            if(!token.sub) return token
            const user = await getUserById(token.sub)
            if(!user) return token
            token.role = (user.role ?? "USER") as "ADMIN" | "USER";
            return token
        }
    }
})