import RegisterForm from "@/app/(auth)/auth/register/register-form";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { registerType } from "@/app/(auth)/auth/register/page";
import { loginSchemaType } from "@/app/(auth)/auth/login/page";
import LoginForm from "./forms/login-form";
import { useServerAction } from "zsa-react";
import { UserLoginAction } from "@/app/(auth)/auth/login/actions";
import { registerUserAction } from "@/app/(auth)/auth/register/actions";
import { useAuthContext } from "./context/auth-context";
import { useState } from "react";

type AuthModalProps = {
    isOpen:boolean;
    onOpenChange:(value:boolean)=> void;
    modalPurpose: "login" | "register";    
}

export default function AuthModal({
    isOpen,
    onOpenChange,
    modalPurpose
}:AuthModalProps){

    const { isAuthenticated } = useAuthContext()

    const [modalType,setModalType] = useState<"login" | "register">(modalPurpose)

    const {execute:loginExecute,isPending:loginPending,error:loginError} = useServerAction(UserLoginAction,{
        onError: () => {
        }
    })
    const {execute:registerExecute,isPending:registerPending,error:registerError} = useServerAction(registerUserAction)

    const registerFormLogic = async(data:registerType) => {
        registerExecute(data)
    }

    const loginFormLogic = async(data:loginSchemaType) => {
        loginExecute(data)
    }

    if(isAuthenticated){
        return null
    }

    return (
        <Dialog onOpenChange={onOpenChange} open={isOpen}>
            <DialogTitle>
                {modalType === "login" ? "Fides LMS" : "Registrate Aqui"}
            </DialogTitle>
            <DialogContent>
                {modalType === "login" ? (
                    <>
                        <LoginForm formLogic={loginFormLogic} isPending={loginPending} />
                        <div className="relative">
                        <span 
                            onClick={() => setModalType("register")}
                            className="absolute -top-36 right-0 text-sm text-slate-600">
                            No tienes una cuenta?
                            <div className="absolute right-0 hover:scale-105 hover:underline cursor-pointer">
                                registrate Aqui
                            </div>
                        </span>
                        </div>
                        {loginError && (
                            <div className="text-red-500">
                                {loginError.message}
                            </div>
                        )}
                    </>
                ) : 
                    <>
                        <RegisterForm formLogic={registerFormLogic} isPending={registerPending} />
                        <p
                            onClick={() => setModalType("login")}
                        >   
                            Volver
                        </p>
                        {registerError && (
                            <div className="text-red-500">
                                {registerError.message}
                            </div>
                        )}
                    </>
                }
            </DialogContent>
        </Dialog>
    )
}