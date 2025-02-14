'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

type ClientSignOutButtonProps = {
    className?:string;
    label?:string
}

export default function ClientSignoutButton({
    className,
    label
}:ClientSignOutButtonProps){
    return (
        <Button
            className={cn("",className)}
            onClick={() => signOut({
                redirectTo: "/"
            })}
        >
            <p>{label ? label : "Cerrar sesión"}</p>
        </Button>
    )
}