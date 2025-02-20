'use client'

import { Button } from "@/components/ui/button"
import { sendVerificationTokenUseCase, testVerificationToken } from "@/use-cases/tokens"
import { Mail } from "lucide-react"

export default function SendEmailVerification({email}:{email:string}){

    const handleEmailVerificationButton =  async() => {
        await sendVerificationTokenUseCase(email)
    }
    return (
        <Button 
            className="flex items-center"
            onClick={handleEmailVerificationButton}
        >
            <Mail />
            Enviar Email de verificacion    
        </Button>
    )
}