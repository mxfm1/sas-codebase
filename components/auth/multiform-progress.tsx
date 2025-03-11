'use client'

import { Check, Circle } from "lucide-react"

const FormSteps = [
    "Configura tu Perfil",
    "Preferencias",
    "Información de la cuenta",
]

export default function MultiStepFormProgress({
    currentStep
}:{
    currentStep: number
}){
    return (
        <>
            <div className="relative flex justify-between items-center p-8 w-full max-w-5xl mx-auto ">
                {FormSteps.map((step, idx) => (
                    <div key={idx} className="relative flex flex-col items-center w-full">
                        {idx == 0 && (
                            <div className="absolute top-3 -right-1/2 h-1 w-full flex" >
                                <div className={`w-full h-full ${idx < currentStep ? "bg-primary" : "bg-slate-100"}`}/> 
                            </div>
                        )}
                        {idx > 0 && idx < FormSteps.length - 1  && (
                                <div className="absolute top-3 left-0 w-full h-1 flex">

                                    <div className={`w-1/2 h-full ${idx <= currentStep ? "bg-primary" : "bg-slate-100"}`} />
                                    <div className={`w-1/2 h-full ${idx < currentStep ? "bg-primary" : "bg-slate-100"}`} />
                                </div>
                        )}
                        {idx === FormSteps.length - 1 && (
                            <div className="absolute top-3 -left-1/2 h-1 w-full flex">
                                <div className={`w-full h-full ${idx <= currentStep ? "bg-primary" : "bg-slate-100"}`} />
                            </div>
                        )}
                        

                        <div
                            className={`
                                relative z-10 w-6 h-6 rounded-full flex items-center justify-center 
                                ${idx == currentStep ? "bg-slate-100" : 
                                    idx < currentStep ? "bg-primary text-white" : "bg-slate-100"
                                }
                            `}
                        >
                            {idx < currentStep ? <Check size={16} /> : null}
                        </div>

                        <p className="pt-2 text-sm text-gray-500">{step}</p>
                    </div>
                ))}
            </div>
            <div className="w-full h-0.5 bg-gray-100" />
        </>
    )
}