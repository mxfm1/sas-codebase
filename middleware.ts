// export { auth as middleware } from '@/auth'

import { auth } from '@/auth';

import { 
    publicRoutes,
    authRoutes,
    apiAuthPrefix,
    DEFAULT_LOGIN_REDIRECT
 } from './app-config';
import { NextRequest } from 'next/server';

export const middleware = async(req:NextRequest) => {
    const { nextUrl } = req
    const session = await auth()
    const isLoggedIn = !!session

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    if(isApiAuthRoute){
        return null
    }

    if(isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
        }
        return null
    }

    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL("/auth",nextUrl))
    }
}


export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)'
    ],
};
  