import { z } from "zod";

export const OnBoardingSchema = z.object({
    name: z.string().min(1,{message:"**Requerido"}),
    lastName: z.string().min(1,{message: "**Requerido"}).nullable(),
    email: z.string().min(1,{message: "**Requerido"}).email({message:"** Email inválido"}),
    preferences: z.array(z.object({
        id: z.string(),
        name: z.string(),
    })).min(1,{message:"**Mínimo 1 preferencia"}),
    courseRecomendation: z.boolean(),  
    courseDiscount: z.boolean(),
    courseNews: z.boolean(),
})

export type OnboardingSchemaType = z.infer <typeof OnBoardingSchema>

