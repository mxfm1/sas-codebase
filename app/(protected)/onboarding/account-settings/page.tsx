'use client'

import MultiStepFormProgress from "@/components/auth/multiform-progress";
import { OnboardingFormWrapper } from "@/components/wrappers";
import { useOnBoardingStore } from "../store";
import CheckBoxSwitch from "./_components/checkbox-switch";
import AccountSettingsPreferencesForm from "./_components/preferences-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AccountSettings(){

    const router = useRouter()

    const name = useOnBoardingStore((store) => store.name)
    const lastName = useOnBoardingStore((store) => store.lastName)
    const preferences = useOnBoardingStore((store) => store.preferences)

    useEffect(() => {
        if(!useOnBoardingStore.persist.hasHydrated) return
        if(!name || !lastName || !preferences){
            router.push("/onboarding/profile")
        }
    },[name,lastName,preferences, useOnBoardingStore.persist.hasHydrated])

    return (
        <div className="h-screen">
              <MultiStepFormProgress
                    currentStep={2}
                />
            <div className="pt-32">
                <OnboardingFormWrapper
                    title="Ultimos Pasos"
                    description="**Informacion que se te enviará a tu correo"
                >
                <div>
                    <AccountSettingsPreferencesForm />
                </div>
                </OnboardingFormWrapper>
            </div>
        </div>
    )
}