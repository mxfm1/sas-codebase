import "server-only";

import { db } from "@/db";
import { lower, users } from "@/db/schema";
import { eq } from "drizzle-orm";

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