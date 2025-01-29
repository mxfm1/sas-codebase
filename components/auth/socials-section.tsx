'use client'
import Image from "next/image"
import { Button } from "../ui/button"

export default function SocialsSection(){
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                className="flex items-center w-full"
                size="lg"
                variant="outline"
                onClick={() => {}}
            >       
                <p className="text-muted-foreground text-sm">Google</p>
                <Image src="/socials/google.svg" width={20} height={20} alt="google-icon" />
            </Button>
        </div>
    )
}