import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {UserModel} from "../models/UserModel";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private route: Router) {
  }

  ngOnInit() {
  }

  async login() {
    console.log('username: ', this.username)
    console.log('password: ', this.password)

    try {
      const login = await this.authService
        .login(this.username, this.password)
      console.log('login: ', login)


      this.authService.buscarUserPorEmail(this.username)
        .subscribe((resultados) => {

          console.log('Resultados de la búsqueda:', resultados[0]);

          let userInfoSend: NavigationExtras = {
            state: {
              user: resultados[0]
            }
          }

          if(resultados[0].tipo == 'cliente'){
            this.route.navigate(['/cliente'], userInfoSend);

          }else if (resultados[0].tipo === 'admin'){
            this.route.navigate(['/admin'], userInfoSend);

          } else if (resultados[0].tipo === 'conductor') {
            this.route.navigate(['/conductor'], userInfoSend);
          }
        });

    } catch (err) {
      this.errorMessage = JSON.stringify(err)
    }
  }

}
