import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';

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
          this.router.navigate(['/accueil']); 
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