import { CurrentUser } from "@/lib/session/server-session";
import { getUserPreferences } from "@/src/infraestructure/repositories/userPreferencesRepository";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function OnboardingLayout({
    children
}:{children:ReactNode}){

    const user = await CurrentUser()
    if(!user?.id) {
        throw new Error("User not found")
    }
    const userPref = await getUserPreferences(user.id)
    if(userPref.length > 0){
        return redirect("/user/inicio")
    }
    return (
        <div>
            {children}
        </div>
    )
}