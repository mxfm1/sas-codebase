import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useAuthContext } from "./context/auth-context";
import { useState } from "react";
import { RegisterFormComponent } from "./components/register-component";
import LoginFormComponent from "./components/login-form-component";

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

    if(isAuthenticated){
        return null
    }

    return (
        <Dialog onOpenChange={onOpenChange} open={isOpen}>
            <DialogContent className="w-[700px]">
                <DialogHeader>
                    <DialogTitle>
                        {modalType === "login" ? "Bienvenido" : ""}
                    </DialogTitle>
                </DialogHeader>
                {modalType === "login" ? (
                    <>
                        <LoginFormComponent changeModalType={setModalType} />
                    </>
                ) : 
                    <>
                        <RegisterFormComponent changeModalType={setModalType} />
                    </>
                }
            </DialogContent>
        </Dialog>
    )
}