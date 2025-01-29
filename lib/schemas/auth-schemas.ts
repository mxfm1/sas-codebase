import { z } from "zod";

export const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
})


export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string()
})