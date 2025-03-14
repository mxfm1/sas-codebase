/**
 * An Aarray of routes that are used for authentication
 */

export const publicRoutes = [
    "/",
    "/inicio/contenido"
]

/**
 * An array of routes that are used for autentication
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth",
    "/auth/error",
]

/**
 * Prefix for API authentication routes
 * @type {string}
 */

export const apiAuthPrefix = 
    "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/onboarding/profile"
export const DEFAULT_AUTH_REDIRECT = "/auth"