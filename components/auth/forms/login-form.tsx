import { LoginSchemaType } from "../types/auth"
import AuthCardWrapper from "../auth-card-wrapper";
import CustomForm from "@/components/forms/custom-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/schemas/auth-schemas";
import CustomFormInput from "@/components/forms/custom-formfield";
import { LockKeyhole, Mail } from "lucide-react";

type LoginFormProps = {
    formLogic: (data:LoginSchemaType) => Promise<void>;
    isPending?:boolean;
}

export default function LoginForm({formLogic,isPending}:LoginFormProps){
    return (
        <AuthCardWrapper title="Fides LMS" showSocials={true}>
            <CustomForm
                submitLogic={formLogic}
                formConfig={{
                    defaultValues: {
                        email: "",
                        password: ""
                    },
                    resolver: zodResolver(LoginSchema)
                }}
                formButtonLabel="Inicia sesión.."
                isPending={isPending}
            >
                <CustomFormInput name="email" type="text" placeholder="Correo.." icon={Mail}/>
                <CustomFormInput name="password" type="password" placeholder="Contraseña.." icon={LockKeyhole}/>
            </CustomForm>
        </AuthCardWrapper>
    )
}