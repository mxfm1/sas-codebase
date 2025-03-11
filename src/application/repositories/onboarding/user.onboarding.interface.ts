import { db } from "@/db";
import { preferences, userPreferences } from "@/db/schema";
import { OnboardingSchemaType } from "@/features/onboarding/schema";
import { processOnboardingInformationUseCaseProps } from "../../use-cases/onboarding/onboarding";
import { eq } from "drizzle-orm";

export const processOnboardingInformation = async({
    data,
    userId
}:processOnboardingInformationUseCaseProps,) => {
    const preferencesData = data.preferences.map(async(preference) => {
        const selectedpreference = await db.query.preferences.findFirst({
            where: eq(preferences.id,preference.id)
        })

        if(!selectedpreference){
            throw new Error("Hubo un problema ")
        }
        return await db.insert(userPreferences).values({
            userId,
            preferenceId:selectedpreference.id
        })
    })
}