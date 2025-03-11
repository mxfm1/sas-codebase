'use client'

import { OnboardingFormWrapper } from "@/components/wrappers"
import { OnBoardingSchema } from "@/features/onboarding/schema"
import { z } from "zod"
import ProfileForm from "../../_components/profile-form"
import { User } from "next-auth"
import { useOnBoardingStore } from "../../store"
import { useRouter } from "next/navigation"
import MultiStepFormProgress from "@/components/auth/multiform-progress"

type ClientProfileFormPageProps = {
    user: User
}

export const ProfileSchema = OnBoardingSchema.pick({
    name:true,
    lastName:true,
    email:true
})
export type ProfileSchemaType  = z.infer <typeof ProfileSchema>

export default function ClientProfileFormPage({
    user
}:ClientProfileFormPageProps){

    const setData = useOnBoardingStore((store) => store.setData)
    const router = useRouter()

    const handleProfileForm = async(data:ProfileSchemaType) => {
        setData(data)
        router.push("/onboarding/preferences")
    }

    return (
        <div className="h-screen">
            <MultiStepFormProgress 
                currentStep={0}
            />
            <div className="pt-32 relative">
                <OnboardingFormWrapper
                
                    title="Configura tu Perfil"
                >
                    <ProfileForm formSubmitLogic={handleProfileForm} user={user} />
                </OnboardingFormWrapper>
            </div>
        </div>
    )
}