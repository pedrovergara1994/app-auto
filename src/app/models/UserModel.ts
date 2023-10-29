import { Auto } from "./auto.model"

export class UserModel {

    constructor(
        public nombre: string,
        public apellido: string,
        public email: string,
        public tipo: string,
        public password?: string,
        public auto?: Auto,
    ) {
    }

    //Metodo dentro de la clase para crear usuario. EJEMPLO solamente.
    static crearUsuario(event: {
        name: string,
        lastName: string,
        email: string
    }){
        return {
            name: event.email,
          lastName: event.lastName,
            email: event.email
        }
    }
}




