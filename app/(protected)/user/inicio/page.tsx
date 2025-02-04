'use client'

import { useAuthContext } from "@/components/auth/context/auth-context"
import { signOut } from "next-auth/react"

export default function UserHomePage(){
    const {user,isAuthenticated} = useAuthContext()

    return (
        <div>
            {user?.email}
            el usuario esta autenticado? {isAuthenticated && (<p>Si</p>)}
            {
                isAuthenticated && (
                    <button onClick={()=> signOut({
                        redirectTo: "/"
                    })}>
                        cerrar sesion
                    </button>
                )
            }
            <div className="mt-8 bg-slate-100 p-4 rounded-md">
                {JSON.stringify(user)}
            </div>
        </div>
    )
}