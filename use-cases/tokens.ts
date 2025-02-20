'use server'

import { sendEmailVerification } from "@/lib/email"
import { generateVerificationToken } from "@/lib/token"
import { Resend } from "resend"
import { v4 as v4uuid } from 'uuid'


const resend = new Resend(process.env.RESEND_API_KEYs)
const domain = 'http://localhost:3000'

export const sendVerificationTokenUseCase = async(email:string) => {
    const token = await generateVerificationToken(email)
    if(!token){
        throw new Error("Hubo un error al generate este token")
    }
    await sendEmailVerification(token.email,token.token)        
}

export const testVerificationToken = async() => {
    const token = v4uuid();
    const expires = new Date(new Date().getTime() + 15 * 60 * 1000)

    const confirmLink = `${domain}/auth/verify-account/${token}`
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "1f.andresm@gmail.com",
        subject: "Valida tu cuenta",
        html: `<p>Clickea aqui <a href=${confirmLink}>Here</a>para validar la funcrion</p> `
       })
}