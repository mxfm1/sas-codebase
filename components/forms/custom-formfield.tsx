'use client'

import { LucideIcon } from "lucide-react";
import { FormControl, FormField, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

type CustomFormInputProps = {
    name:string;
    placeholder?:string;
    type:string;
    icon?:LucideIcon;
}

export default function CustomFormInput({
    name,
    placeholder,
    type,
    icon:Icon,
}:CustomFormInputProps){

    const { control } = useFormContext()
    return (
        <FormField 
            name={name}
            control={control}
            render={({field}) => (
                <div className="flex flex-col w-full">
                    <FormControl>
                        <div className="relative">
                            {Icon && (<Icon className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 text-slate-500" />)}
                            <Input
                                placeholder={placeholder}
                                type={type}
                                {...field}
                                className={cn(
                                    "w-full",Icon ? "pl-8" : ""
                                )}
                            />
                        </div>
                    </FormControl>
                    <FormMessage className="text-red-500 mt-2 text-sm" />
                </div>
            )}
        />
    )
}