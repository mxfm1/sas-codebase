import Sidebar from "@/components/sidebar/sidebar";
import SidebarContent from "@/components/sidebar/sidebar-content";
import { ReactNode } from "react";

export default function Layout({children}:{children:ReactNode}){
    return (
        <div className="flex">
            <SidebarContent />
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}