import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(1,{message:"Porfavor ingresa un nombre.."}),
    email: z.string().email({message: "Email inválido"}),
    password: z.string().min(1,{message:"**Requerido"}),
    confirmPassword: z.string().min(1,{message:"**Requerido.."}),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
})


export const LoginSchema = z.object({
    email: z.string().min(1,{message: "**Requerido"}).email({message: "Email inválido.."}),
    password: z.string().min(1,{message:"**Requerido"})
})