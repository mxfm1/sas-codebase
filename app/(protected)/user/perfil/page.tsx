import { Button } from "@/components/ui/button"
import { CurrentUser } from "@/lib/session/server-session"
import SendEmailVerification from "./_components/verification-email-component"

export default async function UserProfile(){

    const user = await CurrentUser()
    if(!user || !user.email){
        return <div>NMo puedes </div>
    }

    return (
        <div>
            <h1>Pagina de perfil del usuario</h1>
            <div className="mt-12 ">    
                <SendEmailVerification email={user.email} />
                User profile data:
                <p>{JSON.stringify(user)}</p>
            </div>
        </div>
    )
}