import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

export const ErrorCard = () => { 
    return (
        <div className="flex items-center justify-center h-screen text-white">
        <Card className="w-[400px] bg-gray-100 shadow-lg">
            <CardHeader className="gap-y-5">
                <h1 className="text-center text-2xl font-bold text-red-600">Error de Autenticacion</h1>
                <CardDescription className="text-gray-400 text-center mt-4">
                    No pudimos verificar tus credenciales. Inténtalo de nuevo o restablece tu contraseña.
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col gap-4 items-center">
                <Link href="/auth">
                    <Button className="bg-red-600 hover:bg-red-700 w-full">Volver a Intentar</Button>
                </Link>
            </CardFooter>
        </Card>
    </div>
    )
}