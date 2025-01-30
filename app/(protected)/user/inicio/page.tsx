import { auth } from "@/auth"
import { signOut } from "@/auth"

export default async function UserHomePage(){

    const user = await auth()
    return (
        <div>
            {JSON.stringify(user)}
            <form action={async() => {
                "use server"
                await signOut({
                    redirectTo:"/auth/login"
                })
            }}>
                <button>
                    Cerrar Sesion
                </button>
            </form>
        </div>
    )
}