'use server'

import { registerSchema } from "@/lib/schemas/auth-schemas"
import { unauthenticatedAction } from "@/lib/safe-actions"
import { registerUserUseCase } from "@/use-cases/users"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/app-config"

export const registerUserAction = unauthenticatedAction
    .createServerAction()
    .input(registerSchema)
    .handler(async({input:{name,email,password}}) => {
        const newUser = await registerUserUseCase(name,email,password)
        if(newUser){
            await signIn("credentials",{
                email,
                password,
                redirectTo: DEFAULT_LOGIN_REDIRECT
            })
        }
    })