import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  dataUser = {
    email: '',
    password: '',
    pseudo: '',
    passwordVerif: ''
  }

  error: boolean = false;
  errorEmail: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signUp()
  {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;   
    if (!regex.test(this.dataUser.email)) {
      this.error = true;
      return;
    }

    if (this.dataUser.password != this.dataUser.passwordVerif)
    {
      this.error = true;
      return;
    }

    let users = localStorage.getItem("users");

    if (users !== null)
    {
      let userBdd = JSON.parse(users);
      userBdd.forEach( (value: any) => {
        if (value["email"] == this.dataUser.email)
        {
            this.errorEmail = true;
            return;
        }
      }); 

      userBdd.push(
        {
          id: 3,
          pseudo: this.dataUser.pseudo,
          email: this.dataUser.email,
          password: this.dataUser.password
        }
      )
      localStorage.setItem("users", JSON.stringify(userBdd));
    }

    localStorage.setItem("session", this.dataUser.email );
    this.dataUser = {
      email: '',
      password: '',
      pseudo: '',
      passwordVerif: ''
    }
    console.log(localStorage.getItem("users"));
    this.router.navigate(['/accueil']).then(() => {window.location.reload()});
  }

  forgot() {
    this.router.navigate(['/password-forgot']).then(() => {window.location.reload()});
  }

  login() {
    this.router.navigate(['/login']).then(() => {window.location.reload()});
  }

}
