'use client'

import { useCurrentUser } from "@/lib/session/client-session";
import { User } from "next-auth";
import { createContext,ReactNode,useContext } from "react";

type AuthContextType = {
    user: User | undefined;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error("This hook must be used within a context Provider")
    return context
}

export const AuthContextProvider = ({
    children
}:{
    children:ReactNode
}) => {
    const user = useCurrentUser()
    const isAuthenticated = !!user
    return (
        <AuthContext.Provider value={{user,isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}