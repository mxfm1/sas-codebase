'use client'

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

type SidebarItemProps = {
    label:string,
    href:string,
    icon:LucideIcon
}

export default function SidebarItem({
    label,
    href,
    icon:Icon
}:SidebarItemProps){

    const pathname = usePathname()
    const router = useRouter()
    const isActive = (
        pathname.startsWith(href) || pathname === href
    )

    return (
        <div className={cn(
            "p-3 rounded-md hover:scale-105 duration-200 cursor-pointer my-1 w-12  md:w-full", isActive ? "bg-blue-600 text-white" : "bg-white hover:bg-slate-100"
        )}
            onClick={() => router.push(href)}
        >
            <div className="flex items-center space-x-2">
                <Icon size={18} />
                <p className={cn("hidden md:block text-base font-medium")}>{label}</p>
            </div>
        </div>
    )
}