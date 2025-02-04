'use server'
/* eslint-disable */

import { DEFAULT_LOGIN_REDIRECT } from "@/app-config";
import { signIn } from "@/auth";
import { unauthenticatedAction } from "@/lib/safe-actions";
import { LoginSchema, registerSchema } from "@/lib/schemas/auth-schemas";
import { error } from "console";
import { AuthError } from "next-auth";

type signInActionProps = {
    email:string;
    password:string
}

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
                    throw new Error("Credenciales inválidas."); // 👈 Ahora se lanza un error real
                default:
                    throw new Error("Hubo un error, por favor intenta más tarde.");
            }
        }
        
        throw error; // 👈 Lanza cualquier otro error
    }
})