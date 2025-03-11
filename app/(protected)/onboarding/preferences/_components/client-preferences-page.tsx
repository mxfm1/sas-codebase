'use client'

import { OnBoardingSchema } from "@/features/onboarding/schema"
import { z } from "zod"
import PreferencesForm from "../../_components/preferences-form"
import { useRouter } from "next/navigation"
import { useOnBoardingStore } from "../../store"
import { useEffect } from "react"
import { OnboardingFormWrapper } from "@/components/wrappers"
import MultiStepFormProgress from "@/components/auth/multiform-progress"
import { PreferencesType } from "../types"

export const PreferencesSchema = OnBoardingSchema.pick({
    preferences: true,
})

export type PreferencesSchemaType = z.infer <typeof PreferencesSchema>

export type ClientPreferencesPageProps = {
    preferences: PreferencesType[]
}

export default function ClientPreferencesPage({
    preferences
}:ClientPreferencesPageProps){

    const router = useRouter()
    const setData = useOnBoardingStore((store) => store.setData )
    const name = useOnBoardingStore((data) => data.name)
    const lastName = useOnBoardingStore((data) => data.lastName)

    useEffect(() => {
       if(!useOnBoardingStore.persist.hasHydrated) return
       if(!name || !lastName){
        router.push("/onboarding/profile")
       }
    },[name,lastName, useOnBoardingStore.persist.hasHydrated])

    const handlePreferencesForm = async(data:PreferencesSchemaType) => {
        setData(data)
        router.push("/onboarding/account-settings")
    }
    return (
        <div className="h-screen">  
            <MultiStepFormProgress 
                currentStep={1}
            />
            <div className="pt-32">
                <OnboardingFormWrapper
                    title="Elige tus preferencias"
                    description="Selecciona las categorias que más te interesen">   
                    <PreferencesForm 
                        submitFormLogic={handlePreferencesForm}
                        preferences={preferences}
                        />
                </OnboardingFormWrapper>
            </div>
        </div>
    )
}