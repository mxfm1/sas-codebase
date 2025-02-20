import { getVerifyTokenByEmail } from '@/data-access/tokens';
import { db } from '@/db';
import { verifyToken } from '@/db/schema';
import { eq } from 'drizzle-orm';
import {v4 as v4uuid } from 'uuid'

export const generateVerificationToken = async(email:string) => {
    const token = v4uuid();
    const expires = new Date(new Date().getTime() + 15 * 60 * 1000)

    const existingToken = await getVerifyTokenByEmail(email)
    if(existingToken){
        await db.delete(verifyToken).where(eq(verifyToken.email,email))
    }

    const [verificationToken] = await db.insert(verifyToken).values({
        token,
        email,
        expires,
    }).returning()

    return verificationToken;
}