'use client'

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { animate, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { OnBoardingSchema, OnboardingSchemaType } from "@/features/onboarding/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { UserOnboardingOptionsAction } from "../actions"
import { useEffect } from "react"
import { useOnBoardingStore } from "../../store"
import { toast } from "@/hooks/use-toast"
import { OnboardingError } from "./onboarding-error"

const accountPreferencesQuestions: {question:string, name:keyof typeof AccountSettingsSchema._type}[] = [ 
    {
        question:"Quieres que te enviemos recomendaciones nuevos cursos?",
        name: "courseRecomendation"
    },
    {
        question: "Te gustaria recibir notificaciones de descuentos en las membresías ?",
        name: "courseDiscount"
    },
    {
        question: "Prefieres que te notifiquemos sobre noticias y actualizaciones de la plataforma?",
        name: "courseNews"
    }
]

const AccountSettingsSchema = OnBoardingSchema.pick({
    courseRecomendation:true,
    courseDiscount: true,
    courseNews: true
})

export type AccountSettingsType = z.infer <typeof AccountSettingsSchema>

export default function AccountSettingsPreferencesForm(){

    const name = useOnBoardingStore((store) => store.name)
    const lastName = useOnBoardingStore((store) => store.lastName)
    const email = useOnBoardingStore((store) => store.email)
    const preferences = useOnBoardingStore((store) => store.preferences)

    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(AccountSettingsSchema),
        defaultValues: {
            courseRecomendation: true,
            courseDiscount: false,
            courseNews: true
        }
    })
    
    const submitUserServerAction = useMutation({
        mutationFn: async(data:OnboardingSchemaType) => {
           const response = await UserOnboardingOptionsAction(data)
           return response
        },
        onSuccess(data) {
            if (data && data[0]?.success) {  
                toast({
                    title: "Todo listo!",
                    description: "Tus preferencias han sido guardadas con éxito."
                });
    
                router.push("/user/inicio");
            } else {
                throw new Error("Respuesta inesperada del servidor.");
            }
        },
        onError(error){
            toast({
                title: "Hubo un error al guardar tus preferencias..",
                description: "No fue posible guardar tus preferencias. Por favor intenta más tarde.",
                variant: "destructive"
            });
        }
        
    })
    
    const handleAccountSettingsForm = (data:AccountSettingsType) => {
        const newDataset = {
            name: name ?? "",
            lastName: lastName ?? "",
            email: email ?? "",
            preferences: preferences ?? [],
            ...data,
        }
        submitUserServerAction.mutate(newDataset)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAccountSettingsForm)}>
                {accountPreferencesQuestions.map((question,idx) => (
                    <FormField
                        key={idx}
                        name={question.name}
                        control={form.control}
                        render={({field}) => (
                            <FormItem
                                className="flex items-center justify-between w-full pb-3">
                                    <FormLabel className="text-md">
                                    {question.question}
                                    </FormLabel>
                                    <div
                                        className={cn("w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors -translate-y-1",
                                            field.value ? "bg-gray-600" : "bg-gray-300"
                                        )}
                                        onClick={() => field.onChange(!field.value)}
                                    >
        
                                        <motion.div 
                                            className={cn(
                                                "rounded-full w-5 h-5 shadow-md",
                                                field.value ? "bg-primary" : "bg-gray-500",
                                            )}
                                            animate={{  x:field.value ? 20 : 0}}
                                        />
                                    </div>
                            </FormItem>
                        )}
                    />
                ))}

                <div className="flex items-center justify-between pt-12">
                    <Button
                        type="button"
                        className="flex items-center group" 
                        variant="ghost"
                        onClick={() => router.push("/onboarding/preferences")}
                        >
                        <ArrowLeft className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                        Volver
                    </Button>
                    <Button className="">
                        Todo Listo
                    </Button>
                </div>
            </form>
        </Form>
    )
}