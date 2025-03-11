'use client'

import { FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {  Check, Plus } from "lucide-react"

type CategoryPreferencesItemProps = {
    name:string
    handleCategorySelect: (category:{id:string;name:string}) => void;
    isSelected: boolean;
    preferenceId:string
}

export default function CategoryPreferencesItem({
    name,
    handleCategorySelect,
    isSelected,
    preferenceId
}:CategoryPreferencesItemProps){
    return (
        <label 
            className={cn(
                "flex items-center justify-between border bg-slate-50 duration-200 transition-colors rounded-lg p-4 font-medum cursor-pointer h-16  "
                ,isSelected ? "bg-primary text-white shadow-lg" : ""
            )}>
            <Input
                className="hidden"
                type="checkbox"
                onChange={() => handleCategorySelect({id:preferenceId,name})}
            />
            <p className="min-w-[100px] flex-1">{name}</p>
            <div className="w-5 flex items-center justify-center">
                {isSelected ? <Check className="text-white"  size={18}/> : <Plus className="text-primary"  size={18}/>}
            </div>
        </label>    
    )
}
