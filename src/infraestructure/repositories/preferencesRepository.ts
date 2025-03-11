import { db } from "@/db"

export const getAccountPreferences = async() => {
    const preferences = await db.query.preferences.findMany({})
    return preferences
}