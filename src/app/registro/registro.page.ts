import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Usuario} from '../models/user.model';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Auto} from "../models/auto.model";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user = {} as Usuario;
  auto = {} as Auto;
  successMessage: string = "";
  errorMessage: string = "";
  isChecked: boolean = false;


  constructor(private afAuth: AngularFireAuth, private afFirestore: AngularFirestore) {
  }

  ngOnInit() {
  }

  async crearUsuario(email: string, password: string) {
    try {
      const resultado = await this.afAuth.createUserWithEmailAndPassword(email, password);

      if (resultado.user) {
        console.log('Usuario creado con éxito:', resultado.user);

        // Continuar con la creación de un registro en Firestore
        this.crearRegistroEnFirestore(resultado.user.uid, email, this.user.nombre, this.user.apellido, this.isChecked ? 'conductor' : 'cliente' );
      }




          this.errorMessage = "";

          this.successMessage = "Tu cuenta ha sido creada. Por favor inicia sesión.";

    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  }

  crearRegistroEnFirestore(uid: string, email: string, nombre: string, apellido: string, tipo: string) {
    const data = {
      uid: uid,
      email: email,
      nombre: nombre,
      apellido: apellido,
      tipo: tipo,
      auto: this.isChecked ? this.auto : ''
    };

    this.afFirestore.collection('users').doc(uid).set(data)
      .then(() => {
        console.log('Registro en Firestore creado con éxito');
        // Puedes realizar acciones adicionales después de crear el registro en Firestore aquí
      })
      .catch(error => {
        console.error('Error al crear el registro en Firestore:', error);
      });
  }

  registrar() {
     this.crearUsuario(this.user.email, this.user.password)
  }

}
