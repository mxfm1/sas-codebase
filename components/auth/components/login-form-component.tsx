'use client'

import { useServerAction } from "zsa-react"
import LoginForm from "../forms/login-form"
import { LoginSchemaType } from "../types/auth"
import { UserLoginAction } from "@/app/(auth)/auth/actions"
import { Dispatch, SetStateAction } from "react"
import UserAuthFeedback from "./user-feedback"

type LoginFormComponentProps = {
    changeModalType: Dispatch<SetStateAction<"login" | "register">>
}

export default function LoginFormComponent({
    changeModalType
}:LoginFormComponentProps){
    
    const {execute,isPending,error} = useServerAction(UserLoginAction)

    const loginFormLogic = async(data:LoginSchemaType) => {
        execute(data)
    }
    return (
        <>
            <LoginForm formLogic={loginFormLogic} isPending={isPending} />
            <div className="h-10 ">
            {error && (
                    <UserAuthFeedback error={error} />
                )}
           </div>
            <div className="fixed bottom-40 right-5">
                <span className="text-sm text-gray-500 dark:text-gray-400">¿No tienes cuenta?</span>
                <p
                className="hover:text-blue-900 transition-all text-end text-blue-500 cursor-pointer text-sm"
                onClick={() => changeModalType("register")}>
                    Registrate aqui.
            </p>
            </div>
        </>
    )
}