export interface IUsuario {
    id?: string
    first_name?: string
    last_name?: string
    avatar?: string
}

export class Usuario implements IUsuario {
    id?: string
    first_name?: string
    last_name?: string
    avatar?: string
    constructor(){}
}