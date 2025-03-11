import { OnboardingSchemaType } from "@/features/onboarding/schema"
import { getUserById } from "@/use-cases/users";
import { User } from "next-auth"
import { processOnboardingInformation } from "../../repositories/onboarding/user.onboarding.interface";

export type processOnboardingInformationUseCaseProps = {
    data: OnboardingSchemaType,
    userId: string;
}

export const processOnboardingInformationUseCase = ({
    data,
    userId
}:processOnboardingInformationUseCaseProps) => {
    const onboardingData = processOnboardingInformation({
        data,
        userId
    })

    
}