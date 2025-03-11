'use client'

import CustomForm from "@/components/forms/custom-form"
import CustomFormInput from "@/components/forms/custom-formfield"
import { OnBoardingSchema } from "@/features/onboarding/schema"
import { ProfileSchema } from "../profile/_components/client-profile-form-page"
import { ProfileSchemaType } from "../profile/_components/client-profile-form-page"
import { zodResolver } from "@hookform/resolvers/zod"
import { OnboardingFormWrapper } from "@/components/wrappers"
import MultiStepFormProgress from "@/components/auth/multiform-progress"
import { Mail, User as UserIcon } from "lucide-react"
import { User } from "next-auth"
import { useOnBoardingStore } from "../store"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"



export default function ProfileForm({
    formSubmitLogic,
    user
}:{
    formSubmitLogic: (data:ProfileSchemaType) => Promise<void>
    user: User
}){

    const name = useOnBoardingStore((store) => store.name)
    const lastName = useOnBoardingStore((store) => store.lastName)
    const router = useRouter()

    return (
        <CustomForm
            className="pt-8 relative"
            buttonClassName="w-1/4"
            formButtonLabel="Siguiente"
            submitLogic={formSubmitLogic}
            formConfig={{
                resolver: zodResolver(ProfileSchema),
                defaultValues: {
                    name: name ? name : user.name ?? "",
                    lastName: lastName ? lastName : user.lastName ?? "",
                    email: user.email ?? ""
                }
            }}
        >
            <div className="flex gap-x-2">
                <CustomFormInput name="name" type="text" placeholder="Nombre" icon={UserIcon} />
                <CustomFormInput name="lastName" type="text" placeholder="Segundo Nombre" icon={UserIcon}/>
            </div>
            <CustomFormInput name="email" type="email" placeholder="Email" icon={Mail} disabled  className=""/>
            <span className="text-xs text-gray-600 pl-2">**Podras modificar tu email más tarde..</span>

        <div className="absolute -top-32 -right-6">
                <Button 
                    // variant="default"
                    type="button"
                onClick={() => router.push("/user/inicio")}
                className="flex items-center bg-wite hover:bg-red-500 text-black hover:text-white">
                    En otro momento
                </Button>
            </div>
        </CustomForm>
    )
}