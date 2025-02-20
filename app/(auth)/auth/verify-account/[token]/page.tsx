import { LoaderCircleIcon } from "lucide-react";
import { VerifyEmailAction } from "../actions";

export default async function VerifyAccountPage({params}:{params:{token:string}}){

    const token = params.token;
    await VerifyEmailAction(token); 

    return (
        <div className="flex items-center justify-center h-screen">
            <h1>Verificando tu cuenta</h1>
           <LoaderCircleIcon className="animate-spin "/>
           <p>{params.token}</p>
        </div>  
    )
}