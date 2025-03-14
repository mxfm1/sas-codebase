/*eslint-disable*/

import { createServerActionProcedure } from "zsa";
import { CurrentUser } from "./session/server-session";
import { AuthError } from "@/src/entities/errors/auth";

function shapeErrors({err}:any){
    const isAllowedError = err instanceof Error

    const isDev = process.env.NODE_ENV === 'development'

    return {
        code: err.code,
        message:err.message
    }
}

export const unauthenticatedAction = createServerActionProcedure()
    .experimental_shapeError(shapeErrors)
    .handler(async() => {

})

export const authenticatedAction = createServerActionProcedure()
    .experimental_shapeError(shapeErrors)
    .handler(async() => {
        const user = await CurrentUser()
        if(!user){
            throw new AuthError("Hubo un error al obtener los datos del usuario. Porfavor intente nuevamente..")
        }
        return {
            userId: user?.id
        }
    })