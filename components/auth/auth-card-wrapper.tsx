import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
        <Card className="max-w-[350px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocials && (
                <>
                    <Separator label="O inicia sesión"/>
                    <SocialsSection />
                </>
            )}
        </Card>
    )
}