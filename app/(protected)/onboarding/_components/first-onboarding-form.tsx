'use client'

import CustomForm from "@/components/forms/custom-form"
import CustomFormInput from "@/components/forms/custom-formfield"
import { OnBoardingSchema, OnboardingSchemaType } from "@/features/onboarding/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const FirstOnboardingSchema = OnBoardingSchema.pick({
    name:true,
    lastName:true
})

type FirstOnboardingType = z.infer <typeof FirstOnboardingSchema>

type FirstOnBoardingFormProps = {
    submitLogic: (data:FirstOnboardingType) => Promise<void>
}


export default function FirstOnBoardingForm({
    submitLogic
}:FirstOnBoardingFormProps){
    return (
        <CustomForm
            submitLogic={submitLogic}
            formConfig={{
                resolver: zodResolver(FirstOnboardingSchema),
                defaultValues: {
                    name: "",
                    lastName: "",

                }
            }}
        >   
            <CustomFormInput name="name" type="text"/>
            <CustomFormInput name="lastName" type="text" placeholder="Segundo Nomnre.."/>
        </CustomForm>
    )
}