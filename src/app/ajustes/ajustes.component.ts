import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})
export class AjustesComponent  implements OnInit {

  constructor(private dabase:FirestoreService) { }

  ngOnInit() {}

}
