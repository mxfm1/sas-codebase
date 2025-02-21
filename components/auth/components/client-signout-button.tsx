'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { signOut } from "next-auth/react";

type ClientSignOutButtonProps = {
    className?:string;
    label?:string
    icon?:LucideIcon
}

export default function ClientSignoutButton({
    className,
    label,
    icon:Icon
}:ClientSignOutButtonProps){
    return (
        <Button
            className={cn("flex items-center space-x-2",className)}
            onClick={() => signOut({
                redirectTo: "/"
            })}
        >   
            {Icon && <Icon />}
            <p>{label ? label : "Cerrar sesión"}</p>
        </Button>
    )
}