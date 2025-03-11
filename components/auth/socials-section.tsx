'use client'
import Image from "next/image"
import { Button } from "../ui/button"
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/app-config"

export default function SocialsSection(){
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                className="flex items-center w-full"
                size="lg"
                variant="outline"
                onClick={() => {signIn("google",{
                    redirectTo: "/onboarding/profile"
                })}}
            >       
                <p className="text-muted-foreground text-sm">Google</p>
                <Image src="/socials/google.svg" width={20} height={20} alt="google-icon" />
            </Button>
        </div>
    )
}