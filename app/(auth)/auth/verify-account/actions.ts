'use server'

import { getVerifyTokenByToken } from "@/data-access/tokens"
import { db } from "@/db"
import { users, verifyToken } from "@/db/schema"
import { getUserByEmail } from "@/use-cases/users"
import { eq } from "drizzle-orm"

export const VerifyEmailAction = async(token:string) => {
    const existingToken = await getVerifyTokenByToken(token)
    if(!existingToken){
        throw new Error("Token inexistente. Porfavor intenta más tarde")
    }

    const hasExpired = new Date(existingToken.expires) < new Date()
    if(hasExpired){
        throw new Error("El token ha expirado. Porfavor intenta nuevamente..")
        
    }
    const existingUser = await getUserByEmail(existingToken.email)
    if(!existingUser){
        throw new Error("El email no existe..")
    }

    await db.update(users).set({
        emailVerified: new Date(),
        email: existingToken.email
    }).where(
        eq(users.id,existingUser.id)
    )

    await db.delete(verifyToken)
        .where(eq(verifyToken.id,existingToken.id))

}