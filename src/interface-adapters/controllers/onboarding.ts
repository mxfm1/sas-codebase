import { OnboardingSchemaType } from "@/features/onboarding/schema"
import { AuthError } from "@/src/entities/errors/auth"

type processOnboardingDataProps = {
    data: OnboardingSchemaType
    userId:string
}

export const processOnboardingInformation = async({
    data,
    userId
}:processOnboardingDataProps) => {

    if(!userId) throw new AuthError("Debes iniciar sesion para proseguir con el onboarding")
}