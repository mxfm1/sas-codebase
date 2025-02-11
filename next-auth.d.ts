import { DefaultSession, User as NextAuthUser} from 'next-auth'

export type ExtendedUser = DefaultSession["user"] & {
    role: "ADMIN" | "USER"
}

declare module "next-auth"{
    interface User extends NextAuthUser{
        id:string
        role: "ADMIN" | "USER",
        customField: string;
    }
    interface Session {
        user: User
    }
}