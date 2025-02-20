'use client'

import { toCamelCase } from "@/lib/text-fn";
import { cn } from "@/lib/utils";
import { User } from "next-auth";
import { usePathname } from "next/navigation";
import ProfileAvatar from "../avatar/profile-avatar";

type SidebarProps = {
    user: User
}

const hiddenRoutes = [""]

export default function Sidebar({
    user
}:SidebarProps){

    const pathname = usePathname()
    const hiddenRoutes = ["/login"]
    const isHidden = hiddenRoutes.some((route) => pathname.startsWith(route))

    if(isHidden) return null

    return (
        <div className={cn(
            "w-60 border-r shadow-xl z-30 h-screen "
        )}>
            <div className="flex items-center">
                <ProfileAvatar imageURL={user.image ?? ""} />
                <h1 className="text-center pt-4">{toCamelCase(user.name ?? "")}</h1>
            </div>
        </div>
    )
}