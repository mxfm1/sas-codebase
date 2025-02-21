'use client'

import { DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import ProfileAvatar from "../avatar/profile-avatar";
import { 
    DropdownMenuContent,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem
} from "../ui/dropdown-menu";
import { LogOut, PowerIcon, PowerOff } from "lucide-react";
import ClientSignoutButton from "../auth/components/client-signout-button";

type ProfileButtonProps = {
    name:string | null;
    email:string | null;
    imageURL?:string | null;
}

export default function UserProfileButton({
    name,
    email,
    imageURL
}:ProfileButtonProps){
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ProfileButton 
                    name={name}
                    email={email}
                    imageURL={imageURL}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="min-w-[200px translate-x-3 -translate-y-8 p-4">
                <DropdownMenuLabel className="text-xl font-semibold text-center">Acciones</DropdownMenuLabel>
                <DropdownMenuSeparator className="my-4"/>
                    <ClientSignoutButton 
                        className="bg-red-600 text-white hover:bg-red-400"
                        icon={LogOut} />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function ProfileButton({
    name,
    email,
    imageURL
}:ProfileButtonProps){
    return (
        <div 
        className="overflow-hidden pr-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-xl cursor-pointer max-w-[200px]">
            <div className="flex items-center gap-x-1">
                <ProfileAvatar imageURL={imageURL ?? null} width={40} height={40}/>
                <div className="flex-wrap hidden md:block">
                    <h2 className=" font-semibold text-black">{name}</h2>
                    <p className="text-gray-500 text-xs ">{email}</p>
                </div>
            </div>
        </div>
    )
}