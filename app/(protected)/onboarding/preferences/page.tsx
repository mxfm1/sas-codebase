import { getAccountPreferences } from "@/src/infraestructure/repositories/preferencesRepository"
import { getUserPreferences } from "@/src/infraestructure/repositories/userPreferencesRepository"
import PreferencesError from "./_components/preferences-error"
import ClientPreferencesPage from "./_components/client-preferences-page"

export default async function PreferencesPage(){

    const preferences = await getAccountPreferences()
    if(!preferences){
        <PreferencesError />
    }
    return (
        <ClientPreferencesPage preferences={preferences} />
    )
}