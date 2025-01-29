'use client'

import { useContext,createContext, ReactNode } from "react";
import { UseFormReturn,FieldValues } from "react-hook-form";

type FormContextType<T extends FieldValues = FieldValues> = UseFormReturn<T>

const FormContext = createContext<FormContextType | undefined>(undefined)

export const useFormContext = () => {
    const context = useContext(FormContext)
    if(!context){
        throw new Error("UseformContext must beuswed within a form provider")
    }
    return context
}

export const FormProvider = <T extends FieldValues>({
    children,
    methods
}:{
    children:ReactNode,
    methods: UseFormReturn<T>
}) => {
    return (
        <FormContext.Provider value={methods as unknown as FormContextType<FieldValues>}>
            {children}
        </FormContext.Provider>
    )
}