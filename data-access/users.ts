'use server'

import { db } from "@/db"
import { users } from "@/db/schema"

export const registerUser = async(name:string,lastName:string,email:string,password:string) => {
    const [user] = await db.insert(users).values({
        name,
        lastName,
        email,
        password 
    }).returning()

    return user
}