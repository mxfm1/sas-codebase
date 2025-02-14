import { LoginSchema, registerSchema } from "@/lib/schemas/auth-schemas";
import { z } from "zod";

export type signInActionProps = {
    email:string;
    password:string
}

export type registerType= z.infer <typeof registerSchema>
export type loginType = z.infer <typeof LoginSchema>