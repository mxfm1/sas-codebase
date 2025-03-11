import { db } from "@/db"
import { userPreferences } from "@/db/schema"
import { eq } from "drizzle-orm"

export const getUserPreferences = async(userId:string) => {
    const userPref = await db.query.userPreferences.findMany({
        where: eq(userPreferences.userId,userId)
    })
    return userPref
}