'use client'

import { useContext,createContext, ReactNode, useState } from "react"

type AuthModalContextType = {
    isOpen:boolean;
    openModal: () => void;
    closeModal: () => void
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined)

export const useAuthModalContext = () => {
    const context = useContext(AuthModalContext)
    if(!context) throw new Error("This hook must be used withing a provider")
    return context
}

export const AuthModalContextProvider = ({
    children
}:{children:ReactNode}) => {

    const [isOpen,setOpenModal] = useState<boolean>(false)

    const openModal = () => {
        setOpenModal(true)
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <AuthModalContext.Provider value={{isOpen,openModal,closeModal}}>
            {children}
        </AuthModalContext.Provider>
    )
}