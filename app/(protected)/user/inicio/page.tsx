
import { signOut } from "@/auth"
import ClientSignoutButton from "@/components/auth/components/client-signout-button"
import { SignOutButton } from "@/components/auth/components/signout-button"
import { useAuthContext } from "@/components/auth/context/auth-context"
import { CurrentUser } from "@/lib/session/server-session"
import ClientHomePage from "./_components/page"
import { getUserPreferences } from "@/src/infraestructure/repositories/userPreferencesRepository"
import { redirect } from "next/navigation"

export default async function UserHomePage(){
    
    const user = await CurrentUser()
    if(!user || !user.id){
        return redirect("/")
    }
    const userPreferences = await getUserPreferences(user.id)

    return (
        <div>
            {JSON.stringify(user)}
            aa

           <div className="mt-12">
                Usuario

                <ClientSignoutButton />

                <ClientHomePage />
           </div>
        </div>
    )
}