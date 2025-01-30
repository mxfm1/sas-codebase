'use client'

import AuthCardWrapper from "@/components/auth/auth-card-wrapper";
import CustomForm from "@/components/forms/custom-form";
import CustomFormInput from "@/components/forms/custom-formfield";
import { signUpSchema } from "@/lib/schemas/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerUserAction } from "./actions";


export type signUpType = z.infer <typeof signUpSchema>

export default function SignUp(){

    const subLogic = async(data:signUpType) => {
        registerUserAction(data)
    }
    return (
        <>
            <AuthCardWrapper title="Registrate" showSocials={true}>
                <CustomForm
                submitLogic={subLogic}
                formButtonLabel="Registrate"
                formConfig={{
                    defaultValues: {
                        email: "",
                        password:"",
                        confirmPassword: ""
                    },
                    resolver: zodResolver(signUpSchema)
                }}
            >
                <CustomFormInput name="email" type="email"/>
                <CustomFormInput name="password" type="password"/>
                <CustomFormInput name="confirmPassword" type="password"/>
                </CustomForm>
            </AuthCardWrapper>
        </>

        
    )
}