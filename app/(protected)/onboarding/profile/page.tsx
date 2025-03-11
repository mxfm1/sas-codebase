import { CurrentUser } from "@/lib/session/server-session"
import { redirect } from "next/navigation"
import ClientProfileFormPage from "./_components/client-profile-form-page"

export default function ProfilePage(){
    return <ProfilePageForm />
}


async function ProfilePageForm(){
    const user = await CurrentUser()
    if(!user){
        return redirect("/auth")
    }
    return (
        <ClientProfileFormPage  user={user} />
    )
}