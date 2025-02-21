'use client'

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ProfileCardWrapperProps = {
    children:ReactNode,
    isHeader?:boolean,
    className?:string
}

export default function ProfileCardWrapper({
    children,
    isHeader,
    className
}:ProfileCardWrapperProps){
    return (
        <section className={cn("shadow-lg rounded-xl overflow-hidden relative", className)}>
            {isHeader && (
                <div className="bg-slate-100 h-[100px] rounded-t-xl"/>
            )}
            <div className="p-4 bg-slate-50">
                {children}
            </div>
        </section>
    )
}