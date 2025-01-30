/**
 * An Aarray of routes that are used for authentication
 */

export const publicRoutes = [
    "/"
]

/**
 * An array of routes that are used for autentication
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register"
]

/**
 * Prefix for API authentication routes
 * @type {string}
 */

export const apiAuthPrefix = 
    "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/user/inicio"