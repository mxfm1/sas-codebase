import { LoaderCircleIcon } from "lucide-react";

export default function VerifyAccountPage({params}:{params:{token:string}}){
    return (
        <div className="flex items-center justify-center h-screen">
            <h1>Verificando tu cuenta</h1>
           <LoaderCircleIcon className="animate-spin "/>
           <p>{params.token}</p>
        </div>  
    )
}