'use server'

import { LoginSchema, registerSchema } from "@/lib/schemas/auth-schemas"
import { unauthenticatedAction } from "@/lib/safe-actions"
import { registerUserUseCase } from "@/use-cases/users"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/app-config"
import { AuthError } from "next-auth"

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

   
    
export const UserLoginAction = unauthenticatedAction
    .createServerAction()
    .input(LoginSchema)
    .handler(async({input: {email,password}}) => {
        try{
            const result = await signIn("credentials",{
                email,
                password,
                redirectTo: DEFAULT_LOGIN_REDIRECT,
            })

        }catch (error) {
            if (error instanceof AuthError) {
                switch (error.type) {
                    case "CredentialsSignin":
                        throw new Error("Credenciales inválidas.");
                    default:
                        throw new Error("Hubo un error, por favor intenta más tarde.");
                }
            }
            
            throw error;
        }
})