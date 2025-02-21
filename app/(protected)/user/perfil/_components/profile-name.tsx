'use client'

import CustomForm from "@/components/forms/custom-form";
import CustomFormInput from "@/components/forms/custom-formfield";
import { NameSchema } from "@/lib/schemas/profile-schemas";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, X } from "lucide-react";
import { useState } from "react";

export default function ProfileName({name}:{name:string | null}){

    const[isFormOpen,setIsFormOpen] = useState<boolean>(false)
    return (
        <div className="mt-8 group relative">
           <div className="flex items-center justify-between">
            <h1 className={cn(
                "text-xl font-medium",
                isFormOpen && "hidd"
            )}>{name}</h1>
            {!isFormOpen ? (
                <Pencil
                    onClick={() => setIsFormOpen(true)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity cursor pointer text-gray-500"
                    size={18}
                />
            ): <X 
                    onClick={() => setIsFormOpen(false)}
                />
            }
           </div>
           {isFormOpen && (
                <ProfileNameForm />
           )}
        </div>
    )
}


function ProfileNameForm(){

    const formLogic = async(data:any) => {
        console.log("data",data)
    }
    return (
        <CustomForm
            className="z-50"
            formButtonLabel="Editar.."
            submitLogic={formLogic}
            formConfig={{
                defaultValues: {
                    name: ""
                },
                resolver: zodResolver(NameSchema)
            }}
        >
            <CustomFormInput name="name" type="text" placeholder="Nombre.."/>
        </CustomForm>
    )
}