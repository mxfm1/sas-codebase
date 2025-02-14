'use client'

import { registerUserAction } from "@/app/(auth)/auth/actions"
import RegisterForm from "../forms/register-form"
import { registerType } from "@/app/(auth)/auth/types"
import { useServerAction } from "zsa-react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import UserAuthFeedback from "./user-feedback"

type RegisterFormComponentProps = {
    changeModalType: Dispatch<SetStateAction<"login" | "register">>
}

export const RegisterFormComponent = ({
    changeModalType
}:RegisterFormComponentProps) => {

    const {execute,isPending,error} = useServerAction(registerUserAction)

    const registerFormLogic = async(data:registerType) => {
        execute(data)
    }

    return (
        <div className="relative">
            <Button 
                onClick={() => changeModalType("login")}
                className="absolute top-0 left-0 flex space-x-2"
                variant="ghost"
                >
                    <ArrowLeft />
                    Volver
                </Button>
            <RegisterForm 
                formLogic={registerFormLogic} 
                isPending={isPending} 
                socials={false}
                className=" w-fit"
                />
            {error && (
                <UserAuthFeedback error={error} />
            )}
        </div>
    )
}