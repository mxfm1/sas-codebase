import "server-only";

import { db } from "@/db";
import { lower, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { PublicError } from "@/lib/errors";
import { registerUser } from "@/data-access/users";
import { HashPassword } from "@/lib/utils";

export const getUserByEmail = async(email:string): 
    Promise<typeof users.$inferSelect | null> => {
    const user = await db.select().from(users)
    .where(eq(lower(users.email),email.toLowerCase()))
    .then((res) => res[0] ?? null)
    
    return user
}

export const getUserById = async(userId:string):Promise<typeof users.$inferSelect | null> => {

    const user = await db.query.users.findFirst({
        where: eq(users.id,userId)
    }).then((res) => res ?? null)
    return user
}

export const registerUserUseCase = async(name:string,lastName:string,email:string,password:string) => {
    const user = await getUserByEmail(email)
    if(user) throw new PublicError("Este correo ya está siendo utilizado")
    
    const hashedPassword = await HashPassword(password)
    const newUser = await registerUser(name,lastName,email,hashedPassword)
    if(!newUser) throw new PublicError("Hubo un error al crear el usuario. Porfavor intenta más tarde..")
    
    return newUser
}