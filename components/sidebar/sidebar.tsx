'use client'

import { toCamelCase } from "@/lib/text-fn";
import { cn } from "@/lib/utils";
import { User } from "next-auth";
import { usePathname } from "next/navigation";
import ProfileAvatar from "../avatar/profile-avatar";
import Separator from "../separator";
import UserSidebarRoutes from "./user-sidebar-routes";
import LogoSection from "./logo-section";
import ProfileButton from "./profile-button";

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
            "w-16 md:w-60 border-r shadow-xl z-30  h-dvh sticky top-0 flex flex-col justify-center"
        )}>
            <LogoSection logoURL="/brand-logo.png" brandName="Builder"/>
            <Separator />
            <div className="mx-2">
                <UserSidebarRoutes />
            </div>
            <div className="mt-auto mb-8 px-2">
                <ProfileButton name={user.name ?? null} email={user.email ?? null} imageURL={user.image} />
            </div>
        </div>
    )
}