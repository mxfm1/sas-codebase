'use client'

import { useServerAction } from 'zsa-react' 
import { Form, FormControl, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginSchema } from "@/lib/schemas/auth-schemas"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { UserLoginAction } from "./actions"
import { Loader } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { redirect } from 'next/navigation'

export type loginSchemaType = z.infer <typeof LoginSchema>

export default function LoginPage(){
    const { toast } = useToast();

    const {execute, isPending, error} = useServerAction(UserLoginAction, {
        onSuccess: () => {
            toast({
                title: "Iniciaste sesión",
                description: "Éxito.."
            });
            redirect("/user/inicio")
        }
    });

    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(LoginSchema)
    });

    const handleLoginAction = async (data: loginSchemaType) => {
        execute(data);
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleLoginAction)}>
                    <FormField
                        name="email"
                        control={form.control}
                        render={({field}) => (
                            <FormControl>
                                <Input 
                                    placeholder="Email"
                                    {...field}
                                />
                            </FormControl>
                        )}
                    />
                    <FormField
                        name="password"
                        control={form.control}
                        render={({field}) => (
                            <FormControl>
                                <Input 
                                    placeholder="password"
                                    {...field}
                                />
                            </FormControl>
                        )}
                    />
                    <div>
                        <Button>
                            {isPending ? (
                                <Loader className='animate-spin' />
                            ) : "Inicia sesión.."}
                        </Button>
                    </div>
                    {error && (
                        <div className="text-red-500">
                            <p>{error.message}</p>
                        </div>
                    )}
                </form>
            </Form>
        </div>
    );
}
