'use client'

import { FormControl, FormField, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";

type CustomFormInputProps = {
    label?:string;
    name:string;
    placeholder?:string;
    type:string;
}

export default function CustomFormInput({
    name,
    placeholder,
    type
}:CustomFormInputProps){

    const { control } = useFormContext()
    return (
        <FormField 
            name={name}
            control={control}
            render={({field}) => (
                <>
                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            type={type}
                            {...field}
                        />
                    </FormControl>
                    <div className="relative">
                        <FormMessage className="absolute -top-6 left-2"/>
                    </div>
                </>
            )}
        />
    )
}