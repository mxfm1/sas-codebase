'use client'


import ProfileCardWrapper from "../perfil/_components/profile-card-wrapper";

export default function Route(){
    return (
        <ProfileCardWrapper>
            <div>
                <h1 className="text-center text-3xl">Configuracion</h1>
                <p className="mt-10 text-slate-400 font-medium">
                    Aqui puedes modificar aspectos referentes a tu cuenta
                </p>
            </div>
        </ProfileCardWrapper>
    )
}