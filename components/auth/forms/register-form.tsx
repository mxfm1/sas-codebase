import AuthCardWrapper from "@/components/auth/auth-card-wrapper";
import CustomForm from "@/components/forms/custom-form";
import CustomFormInput from "@/components/forms/custom-formfield";
import { registerSchema } from "@/lib/schemas/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerType } from "@/app/(auth)/auth/types";

type RegisterFormProps = {
    formLogic: (values:registerType) => Promise<void>
    isPending?:boolean
    socials?:boolean;
    className?:string
}

export default function RegisterForm({
    formLogic,
    isPending,
    socials=true,
    className,
}:RegisterFormProps){
    return (
        <AuthCardWrapper 
            title="Registrate" 
            showSocials={socials} 
            className={className}
            description="A pasos de conseguir un mejor sueldo en tu trabajo"
            >
                <CustomForm
                    submitLogic={formLogic}
                    formButtonLabel="Registrate"
                    isPending={isPending}
                    formConfig={{
                        defaultValues: {
                            name:"",
                            lastName:"",
                            email:"",
                            password: "",
                            confirmPassword: ""
                        },
                        resolver: zodResolver(registerSchema)
                    }}
                >   
                    <div className="flex gap-x-4">
                        <CustomFormInput name="name" type="text" placeholder="Nombre.." />
                        <CustomFormInput name="lastName" type="text" placeholder="Segundo Nombre"/>
                    </div>
                    <CustomFormInput name="email" type="email" placeholder="Correo.."/>
                    <CustomFormInput name="password" type="password" placeholder="Contraseña.."/>
                    <CustomFormInput name="confirmPassword" type="password" placeholder="Confirma tu contraseña.."/>
                </CustomForm>
            </AuthCardWrapper>
    )
}