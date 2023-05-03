import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.page.html',
  styleUrls: ['./login-test.page.scss'],
})
export class LoginTestPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  logIn(email: any, password: any) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          if (res.user?.photoURL !== null){
            return this.router.navigate(['/explain']);
          }
          return this.router.navigate(['/accueil']);
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  forgot() {
    this.router.navigate(['/password-forgot']);
  }

  register() {
    this.router.navigate(['/register']);
  }
}
