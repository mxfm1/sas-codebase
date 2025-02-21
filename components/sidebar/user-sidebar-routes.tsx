import { User } from "lucide-react";
import SidebarItem from "./user-sidebar-item";
import { UserProfileSidebar } from "./contants";

export default function UserSidebarRoutes(){
    return (
        <div className="">
            {UserProfileSidebar.map((route,index) => (
                <SidebarItem
                    label={route.label}
                    href={route.href}
                    icon={route.icon}
                    key={index}/>
            ))}
        </div>
    )
}