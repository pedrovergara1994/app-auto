import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { IUserLogin } from '../models/IUserLogin';
import { UserModel } from '../models/UserModel';
import listaUser from '../models/listas.model'
import { Auto } from '../models/auto.model';





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule]})
export class LoginPage implements OnInit {


  auto1: Auto = {
    anio: '2021',
    cantidadasientos: '4',
    marca: 'cherolet',
    modelo: 'sail',
    color: 'plomo',
    matricula: '123456'
    
  }

  auto2: Auto = {
    anio: '2021',
    cantidadasientos: '4',
    marca: 'cherolet',
    modelo: 'spark lt',
    color: 'rojo',
    matricula: '456789',
    
  }

  

  userLoginModal: IUserLogin = {
    username: '',
    password: ''
  };

  constructor(private route: Router) { }

  ngOnInit() {
    this.userLoginModalRestart();
  }

  userLogin(userLoginInfo: IUserLogin): boolean {
    console.log('user: ', userLoginInfo.username)
    console.log('pass: ', userLoginInfo.password)

    listaUser.forEach((u) => {
      if (u.username == userLoginInfo.username &&
       u.password == userLoginInfo.password) {
        console.log('User Logeado...', this.userLoginModal.username, this.userLoginModal.password);
        let userInfoSend: NavigationExtras = {
          state: {
            user: u
          }
        }
        if(u.type == 'cliente'){
          let sendInfo = this.route.navigate(['/cliente'], userInfoSend);
          
        }else if (u.type === 'admin'){
          let sendInfo = this.route.navigate(['/admin'], userInfoSend);
          
        } else if (u.type === 'conductor') {
          this.route.navigate(['/conductor'], userInfoSend);
        }
      }
  })
    
    this.userLoginModalRestart();
    return false;
    
  }

  userLoginModalRestart(): void{
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
  }
}

