'use client'

import { useOnBoardingStore } from "@/app/(protected)/onboarding/store"

export default function ClientHomePage(){

    const preferences = useOnBoardingStore((store) => store.preferences)
    return (
        <div>
            <h1 className="text-center">User Store data</h1>
            <ul>

            </ul>
        </div>
    )
}