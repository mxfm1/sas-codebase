'use client'

import AuthCardWrapper from "@/components/auth/auth-card-wrapper";
import CustomForm from "@/components/forms/custom-form";
import CustomFormInput from "@/components/forms/custom-formfield";
import { signInSchema, signUpSchema } from "@/lib/schemas/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


type signUpType = z.infer <typeof signInSchema>

export default function SignUp(){

    const subLogic = async(data:signUpType) => {
        console.log("DATA",data)
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