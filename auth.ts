import NextAuth, { User } from "next-auth";
import Google from 'next-auth/providers/google'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { getUserByEmail, getUserById } from "./use-cases/users";
import bcrypt from 'bcryptjs'
import { db } from "./db";

import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";

export const {handlers, auth, signIn,signOut} = NextAuth({

    // @ts-expect-error: The DrizzleAdapter type conflicts with the version expected by next-auth
    adapter: DrizzleAdapter(db),
    pages: {
        signIn: "/auth",
        error: "/auth/error"
    },
    providers : [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
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
                    image: user.image ?? null,
                    role: user.role as "ADMIN" | "USER",
                    emailVerified: user.emailVerified,
                } as User
            }
        })
    ],
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    events: {
        async linkAccount({user}){
           if(!user.id){
                return
           }
           await db.update(users)
           .set({emailVerified: new Date()})
           .where(eq(users.id,user.id))
        }
    },
    callbacks: {
        async session({token,session}){
            if(token.sub && session.user){
                session.user.id = token.sub
            }
            if(token.email && session.user){
                session.user.email = token.email
            }
            
            if(token.role && session.user){
                session.user.role = token.role as "ADMIN" | "USER";
            }
            session.user.emailVerified = token.emailVerified as Date
            session.user.image = token.image as string ?? null
            return session
        },
        async jwt({token}){
            if(!token.sub) return token
            const user = await getUserById(token.sub)
            if(!user) return token
            token.role = (user.role ?? "USER") as "ADMIN" | "USER";
            token.emailVerified = user.emailVerified ?? null
            token.image = user.image ?? null
            return token
        }
    }
})