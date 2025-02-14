import { CurrentUser } from "@/lib/session/server-session";
import Sidebar from "./sidebar";
import UserNotFound from "./404-user";

export default async function SidebarContent(){
    const user = await CurrentUser()
    
    if(!user){
        return null
    }
    return (
        <Sidebar user={user} />
    )
}