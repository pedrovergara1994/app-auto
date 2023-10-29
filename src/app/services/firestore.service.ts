import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
    constructor(private firestore: AngularFirestore) {}

    crearUsuario(data: any, path: string, id: string){
        const collection = this.firestore.collection(path);
        return collection.doc(id).set(data);
    }



    createDoc(){
        this.firestore.collection("Usuario");
    }

    getColeccion(){
        console.log("Obteniendo coleccion");
        this.firestore.collection("Usuario").valueChanges().subscribe((res) => {
            console.log('res -> ',res);
        });
    }
}
