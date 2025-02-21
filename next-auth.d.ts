import { DefaultSession, User as NextAuthUser} from 'next-auth'

export type ExtendedUser = DefaultSession["user"] & {
    role: "ADMIN" | "USER"
    image:string | null
}

declare module "next-auth"{
    interface User extends NextAuthUser{
        id:string;
        email:string;
        role: "ADMIN" | "USER",
        image:string | null;
        emailVerified:Date;
    }
    interface Session {
        user: User
    }
}