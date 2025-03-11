'use client'

import CustomForm from "@/components/forms/custom-form"
import CustomFormInput from "@/components/forms/custom-formfield"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFormContext } from "react-hook-form"
import { PreferencesSchema,PreferencesSchemaType } from "../preferences/_components/client-preferences-page"
import { Button } from "@/components/ui/button"
import CategoryPreferencesItem from "../preferences/_components/category-preferences"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { PreferencesType } from "../preferences/types"

export default function PreferencesForm({
    submitFormLogic,
    preferences
}: {
    submitFormLogic: (data: PreferencesSchemaType) => Promise<void>,
    preferences: PreferencesType[]
}) {
    const form = useForm({
        resolver: zodResolver(PreferencesSchema),
        defaultValues:{
            preferences: [] as PreferencesType[]
        }
    })

    const { handleSubmit, setValue, watch} = form

    const router = useRouter()
    const selectedCategories = watch("preferences")

    const handleToggleCategory = (category: {id:string;name:string}) => {
        setValue(
            "preferences",
            selectedCategories.some((item) => item.id === category.id)
            ? selectedCategories.filter((item) => item.id !== category.id)
            : [...selectedCategories, category]
        )
    }

    return (
      <Form {...form}>
        <form onSubmit={handleSubmit(submitFormLogic)} className="relative">
            <FormField 
                control={form.control}
                name="preferences"
                render={({field}) => (
                    <FormItem>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2">
                            {preferences.map((preference,idx) => (
                                <CategoryPreferencesItem
                                    isSelected={selectedCategories.some((item) => item.id == preference.id)}
                                    key={idx}
                                    name={preference.name}
                                    handleCategorySelect={handleToggleCategory}
                                    preferenceId={preference.id}
                                />
                            ))}
                        </ul>
                        <FormMessage className="absolute bottom-10s left-0" />
                    </FormItem>
                )}  
            />
            <FormMessage /> 
            <div className="flex items-center justify-between pt-12">
                <Button
                    type="button"
                    className="w-24 flex items-center justify-between group" 
                    variant="ghost" 
                    onClick={() => router.push("/onboarding/profile")}
                    >
                    <ArrowLeft className="opacity-0 transition-opacity duration-300 delay-150 group-hover:opacity-100"/>
                    <p>Volver</p>
                </Button>
                <Button className="flex items-center justify-between min-w-32 group" type="submit">
                    <p>Siguiente</p>
                    <ArrowRight className="opacity-0 transition-opacity duration-300 delay-150 group-hover:opacity-100" />  
                </Button>
            </div>
        </form>
      </Form>
    )
}
