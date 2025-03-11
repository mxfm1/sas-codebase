import { auth } from "@/auth";
import { cache } from "react";

export const TestCurrentUser = cache(async() => {
    const session = await auth()
    return session?.user;
})