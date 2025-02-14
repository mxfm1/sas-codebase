import { Search } from "lucide-react";

export default function UserNotFound(){
    return (
        <div className="p-4 rounded-md bg-cyan-100">
            <Search />
            <p>Upps hubo un problema al cargar tus datos. Porfavor intenta nuevamente</p>
        </div>
    )
}