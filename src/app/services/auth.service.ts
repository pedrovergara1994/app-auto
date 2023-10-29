import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'; // Importa AngularFireAuth desde el módulo "@angular/fire/auth"
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {UserModel} from "../models/UserModel";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private firestore: AngularFirestore) {
  }

  async login(username: string, password: string) {
    const user = await this.afAuth.signInWithEmailAndPassword(username, password);
    console.log('user: ', user)
    return user
  }

  buscarUserPorEmail(email: string) {
    return this.firestore.collection<UserModel>('users', ref => ref.where('email', '==', email)).valueChanges();
  }

  // Agrega aquí otros métodos correspondientes para la autenticación

}
