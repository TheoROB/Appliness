import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-registration-test',
  templateUrl: './registration-test.page.html',
  styleUrls: ['./registration-test.page.scss'],
})
export class RegistrationTestPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit(){}

  signUp(email: any, password: any, passwordVerif: any, displayName: any){

    if (password.value != passwordVerif.value)
    {
      window.alert("Les mots de passe ne sont pas identique")
      return;
    }

    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {

      res.user?.updateProfile({
        displayName: displayName.value,
        photoURL: ""
      });

      this.authService.SendVerificationMail();
      this.router.navigate(['/verify-email']);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  login() {
    this.router.navigate(['/login']);
  }
}
