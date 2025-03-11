import { OnboardingFormWrapper } from "@/components/wrappers";

export default function PreferencesError(){
    return (
        <OnboardingFormWrapper>
            <div className="">
                <h1 className="text-center text-lg font-500">Hubo un error Al obtener las preferencias</h1>
                <p className="p-4 text-center">Hubo un error al cargar las preferencias. Porfavor intenta en otra ocasión..</p>
            </div>
        </OnboardingFormWrapper>
    )
}