import { UserModel } from "./UserModel";
import { Auto } from "./auto.model";

const listaUser : UserModel[] = []

const auto1: Auto = {
    anio: '2021',
    cantidadasientos: '4',
    marca: 'cherolet',
    modelo: 'sail',
    color: 'plomo',
    matricula: '123456'
    
  }

  const auto2: Auto = {
    anio: '2021',
    cantidadasientos: '4',
    marca: 'cherolet',
    modelo: 'spark lt',
    color: 'rojo',
    matricula: '456789',
    
  }

listaUser.push(new UserModel('Jorge','Gomez','jgomez@gmail.com',undefined,'cliente','jgomez','jorge123'))
listaUser.push(new UserModel('Juan','Perez','jperez@gmail.com',undefined,'ADMIN','jperez','juan123'))
listaUser.push(new UserModel('Carlos','Gomez','cgomez@gmail.com',undefined,'conductor','cgomez','carlos123', auto1))
listaUser.push(new UserModel('Valentina','Gomez','vgomez@gmail.com',undefined,'conductor','vgomez','valentina123', auto2))

export default listaUser