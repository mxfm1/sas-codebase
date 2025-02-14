
'use client'

import AuthModal from "@/components/auth/auth-modal"
import { useAuthModalContext } from "@/components/auth/context/modal-context"
import { Button } from "@/components/ui/button"
import { useCurrentUser } from "@/lib/session/client-session"
import { useEffect } from "react"

export default function Auth(){

    const {openModal,closeModal,isOpen} = useAuthModalContext()
    const user = useCurrentUser()

    useEffect(() => {
        if(!user){
            openModal()
        }
    },[user])

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Estas a un paso de volverte un mejor profesional
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                Para acceder a todas las funciones, inicia sesión con tu cuenta.
            </p>

            {/* Modal de autenticación */}
            <AuthModal isOpen={isOpen} onOpenChange={closeModal} modalPurpose="login" />

            {/* Botón para abrir el modal si el usuario lo cerró */}
            {!isOpen && (
                <Button onClick={openModal} className="mt-4 w-full">
                    Iniciar sesión
                </Button>
            )}
        </div>
    </div>
    )
}