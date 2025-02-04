import { z } from "zod";

export const registerSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
})


export const LoginSchema = z.object({
    email: z.string().min(1,{message: "**Requerido"}).email({message: "Email inválido.."}),
    password: z.string().min(1,{message:"**Requerido"})
})