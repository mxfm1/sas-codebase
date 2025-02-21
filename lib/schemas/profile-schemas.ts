import { z } from "zod";

export const NameSchema = z.object({
    name: z.string().min(1,{message:"**Requerido.."})
})

export const ProfileSchema = z.object({
    name: z.string().min(1,{message:"**Requerido.."}),
    email: z.string().min(1,{message: "**Requerido.."}).email({message:"Email invalido.."}),
})