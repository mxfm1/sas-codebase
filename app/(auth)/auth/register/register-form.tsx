import AuthCardWrapper from "@/components/auth/auth-card-wrapper";
import CustomForm from "@/components/forms/custom-form";
import CustomFormInput from "@/components/forms/custom-formfield";
import { registerSchema } from "@/lib/schemas/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerType } from "./page";

type RegisterFormProps = {
    formLogic: (values:registerType) => Promise<void>
    isPending?:boolean
}

export default function RegisterForm({
    formLogic,
    isPending
}:RegisterFormProps){
    return (
        <AuthCardWrapper title="Registrate" showSocials={true}>
                <CustomForm
                submitLogic={formLogic}
                formButtonLabel="Registrate"
                isPending={isPending}
                formConfig={{
                    defaultValues: {
                        email: "",
                        password:"",
                        confirmPassword: ""
                    },
                    resolver: zodResolver(registerSchema)
                }}
            >
                <CustomFormInput name="email" type="email"/>
                <CustomFormInput name="password" type="password"/>
                <CustomFormInput name="confirmPassword" type="password"/>
                </CustomForm>
            </AuthCardWrapper>
    )
}