import ProfileAvatar from "@/components/avatar/profile-avatar";
import { ReactNode } from "react";

type UserWrapperProps = {
    children:ReactNode
}

export default function UserWrapper({
    children
}:UserWrapperProps){
    return (
        <div className="relative">
            <div className="p-4 bg-slate-50 rounded-br-3xl shadow-md min-h-32"/>
            <div>
                {children}
            </div>
        </div>
    )
}