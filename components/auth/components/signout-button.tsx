'use server'

import { signOut } from "@/auth"

export async function SignOutButton(){
    return (
        <form 
            action={async() => {
            'use server'

            await signOut()    
        }}>
            <button type="submit">
                Cerrar sesion
            </button>
        </form>
    )
}