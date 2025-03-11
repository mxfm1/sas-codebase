'use client'

import { OnboardingSchemaType } from "@/features/onboarding/schema";
import { create } from 'zustand'
import  { persist, createJSONStorage } from 'zustand/middleware'

type OnboardingState = Partial<OnboardingSchemaType> & {
    setData: (data:Partial<OnboardingSchemaType>) => void
}

export const useOnBoardingStore = create<OnboardingState>()(
    persist(
        (set) => ({
            setData: (data) => set(data)
        }),{
            name: 'onboarding-store',
            storage: createJSONStorage( () => localStorage)
        }
    )
)