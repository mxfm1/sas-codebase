
import { signOut } from "@/auth"
import ClientSignoutButton from "@/components/auth/components/client-signout-button"
import { SignOutButton } from "@/components/auth/components/signout-button"
import { useAuthContext } from "@/components/auth/context/auth-context"
import { CurrentUser } from "@/lib/session/server-session"

export default async function UserHomePage(){
    
    const user = await CurrentUser()
    

    return (
        <div>
            {JSON.stringify(user)}
            aa

           <div className="mt-12">
                Usuario

                <ClientSignoutButton />
           </div>
        </div>
    )
}