import { Home, Settings, User } from "lucide-react";

export const UserProfileSidebar = [
    {
        label:"Inicio",
        href: "/user/inicio",
        icon: Home
    },
    {
        label: "Perfil",
        href: "/user/perfil",
        icon: User,
    },{
        label: "Configuracion",
        href: "/user/configuracion",
        icon: Settings
    }

]