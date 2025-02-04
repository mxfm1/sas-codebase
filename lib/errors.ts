export class AuthenticationError extends Error {
    constructor(){
        super()
        this.message = "Error al iniciar sesion"
    }
}

export class PublicError extends Error {
    constructor(message:string){
        super(message)
        this.name = "PublicError"
    }
}