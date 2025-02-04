import { ReactNode } from "react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import Separator from "../separator";
import SocialsSection from "./socials-section";

type CardAuthWrapperProps = {
    title: string;
    children:ReactNode;
    showSocials?:boolean
}

export default function AuthCardWrapper({
    title,
    showSocials=false,
    children
}:CardAuthWrapperProps){
    return (
        <div className="max-w-full">
            <CardHeader>
                <CardTitle className="text-center text-2xl">{title}</CardTitle>
                {/* <CardDescription>Pioneros en la capacitacion de profesionales</CardDescription> */}
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