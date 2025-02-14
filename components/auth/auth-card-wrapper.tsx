import { ReactNode } from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Separator from "../separator";
import SocialsSection from "./socials-section";
import { cn } from "@/lib/utils";

type CardAuthWrapperProps = {
    title: string;
    children:ReactNode;
    showSocials?:boolean
    className?:string
    description?:string;
}

export default function AuthCardWrapper({
    title,
    showSocials=false,
    children,
    className,
    description
}:CardAuthWrapperProps){
    return (
        <div className={cn(
            "w-full",className
        )}>
            <CardHeader>
                <CardTitle className="text-center text-2xl">{title}</CardTitle>
                {description && <CardDescription className="py-2">{description}</CardDescription>}
            </CardHeader>
            <CardContent className="border-none shadow-white">
                {children}
            </CardContent>
            {showSocials && (
                <>
                    <Separator label="O inicia sesión" className="pt-6"/>
                    <SocialsSection />
                </>
            )}
        </div>
    )
}