'use server'

import { signUpSchema } from "@/lib/schemas/auth-schemas"
import { signUpType } from "./page"
import { db } from "@/db"
import { users } from "@/db/schema"
import bcrypt from 'bcryptjs'

export const registerUserAction = async(values:signUpType) => {
    const parsedData = signUpSchema.safeParse(values)

    const{ email,password} = parsedData.data

    const hashedPassword = await bcrypt.hash(password,10)

    const user = await db.insert(users).values({
        email,
        password:hashedPassword,
    })

    
}