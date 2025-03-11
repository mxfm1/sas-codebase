'use client'

import { ReactNode } from "react";
import { Form } from "../ui/form"
import { FieldValues, useForm, UseFormProps, FormProvider } from "react-hook-form";
import { Button } from "../ui/button";
import { Loader } from 'lucide-react'
import { cn } from "@/lib/utils";

type CustomFormType<T extends FieldValues> = {
    children:ReactNode;
    formConfig: UseFormProps<T>
    submitLogic: (data:T) => Promise<void>,
    formButtonLabel?:string;
    isPending?:boolean;
    className?:string;
    buttonClassName?:string;
}

export default function CustomForm<T extends FieldValues>({
    children,
    formConfig,
    submitLogic,
    formButtonLabel,
    isPending,
    className,
    buttonClassName
}:CustomFormType<T>){

    const formMethods = useForm<T>({
        ...formConfig,
        mode: "onSubmit"
    })

    return (
        <FormProvider {...formMethods}>
            <Form {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(submitLogic)} className={cn("space-y-8", className)}>
                    {children}
                    <div className="flex items-center justify-center">
                        <Button className={cn("mt-2 w-full",buttonClassName)} type="submit">
                            {isPending ? <Loader className="w-4 h-4 animate-spin" />
                                : formButtonLabel
                                ? formButtonLabel 
                                : "Enviar.."
                            }
                        </Button>
                    </div>
                </form>
            </Form>
        </FormProvider>
    )
}