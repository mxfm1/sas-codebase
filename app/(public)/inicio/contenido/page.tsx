'use client'

import AuthModal from "@/components/auth/auth-modal";
import { useAuthContext } from "@/components/auth/context/auth-context";
import { useAuthModalContext } from "@/components/auth/context/modal-context";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function ContentPage(){

    const { isAuthenticated } = useAuthContext()
    const {isOpen,openModal,closeModal} = useAuthModalContext()

    const handleUserContent = () => {
        if(!isAuthenticated){
            openModal()
        }
    }
    return (
        <div className="flex h-full">
            <div className="h-14 rounded-md bg-slate-200 p-4">
                <h1>Historial de contenido</h1>
            </div>

            <Button className="flex items-center" onClick={handleUserContent}>
                Ver contenido
                <MoveRight />
            </Button>

            <AuthModal modalPurpose="login" isOpen={isOpen} onOpenChange={closeModal} />
        </div>
    )
}