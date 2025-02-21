import { Button } from "@/components/ui/button"
import { CurrentUser } from "@/lib/session/server-session"
import SendEmailVerification from "./_components/verification-email-component"
import UserWrapper from "../_components/user-routes-wrapper"
import ProfileHeader from "./_components/profile-header"
import ProfileAvatar from "@/components/avatar/profile-avatar"
import { Linkedin, Plus } from "lucide-react"
import RecentCourses from "./_components/profile-recent-courses"
import ProfileCardWrapper from "./_components/profile-card-wrapper"
import ProfileContent from "./_components/profile-content"

export default async function UserProfile(){

    const user = await CurrentUser()
    if(!user || !user.email){
        return <div>NMo puedes </div>
    }

    return (
        <ProfileCardWrapper className="" isHeader={true}>
            <ProfileContent user={user}/>
        </ProfileCardWrapper>
    )
}

function Header({image}:{image:string | null}){
    return (
        <div className="rounded-xl shadow-xl border">
            <div className="min-h-20 bg-slate-100 relative rounded-t-xl">
                 <Button className="absolute top-24 right-4">
                    Editar Perfil
                </Button>
                <div className="absolute top-1/2 left-10">
                    <ProfileAvatar imageURL={image} />
                </div>  
            </div>
            <div className="grid grid-cols-3 mt-12 p-4 rounded-b-md space-x-4">
                <div>
                    <h1 className="text-3xl font-bold">Felipe Machuca</h1>
                    <span>@email</span>
                </div>
                <div className="">
                    <h1 className="text-semibold text-xl">Intereses </h1>
                    <div className="flex items-center text-green-500 hover:bg-slate-50 rounded-xl p-2 w-fit">
                        <Plus />
                        <p>Economia</p>
                    </div>
                    <div className="flex items-center text-green-500 hover:bg-slate-50 rounded-xl p-2 w-fit">
                        <Plus />
                        <p>Salud</p>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-xl font-semibold">Redes</h1>

                    <div className="flex items-center space-x-2 pt-4">
                        <Linkedin size={18}/>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}