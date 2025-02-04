'use client'

import { registerSchema } from "@/lib/schemas/auth-schemas";
import { z } from "zod";
import { registerUserAction } from "./actions";
import RegisterForm from "./register-form";


export type registerType = z.infer <typeof registerSchema>

export default function SignUp(){

    const subLogic = async(data:registerType) => {
        await registerUserAction(data)
    }
    return (
        <>
            <RegisterForm formLogic={subLogic} />
        </>

        
    )
}