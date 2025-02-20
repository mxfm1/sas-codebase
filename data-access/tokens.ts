'use server'

import { db } from "@/db"
import { verifyToken } from "@/db/schema"
import { eq } from "drizzle-orm"

export const getVerifyTokenByEmail = async(email:string) => {
    const token = await db.query.verifyToken.findFirst({
        where: eq(verifyToken.email,email)
    })
    return token
}

export const getVerifyTokenByToken = async(token:string) => {
    const existingToken = await db.query.verifyToken.findFirst({
        where: eq(verifyToken.token,token)
    })

    return existingToken
}