'use server'

import { OnBoardingSchema } from "@/features/onboarding/schema"
import { authenticatedAction } from "@/lib/safe-actions"
import { processOnboardingInformationUseCase } from "@/src/application/use-cases/onboarding/onboarding"
import { redirect } from "next/navigation"

export const UserOnboardingOptionsAction = authenticatedAction
    .createServerAction()
    .input(OnBoardingSchema)
    .handler(async({input,ctx}) => {
        const userId = ctx.userId as string
        const onboardingData = processOnboardingInformationUseCase({
            data:input,
            userId
        })
        return {success:true}
    })

