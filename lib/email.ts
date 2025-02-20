import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmailVerification = async(
    email:string,
    token:string
) => {
    const domain = "http://localhost:3000"
    const confirmLink = `${domain}/auth/verify-account/${token}`

   await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Valida tu cuenta",
    html: `<p>Clickea aqui <a href=${confirmLink}>Here</a>para validar la funcrion</p> `
   })
}