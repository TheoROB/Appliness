import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  dataUser = {
    email: '',
    password: ''
  }

  error: boolean = false;

  constructor(private router: Router) 
  {}

  ngOnInit() {
  }

  login() {
    console.log(localStorage.getItem("users"));
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(this.dataUser.email)) {
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
          if (value["password"] == this.dataUser.password)
          {
            localStorage.setItem("session", value["email"] );
            this.dataUser = {
              email: '',
              password: ''
            }
            this.router.navigate(['/accueil']).then(() => {window.location.reload()});
          }
        }
      }); 
    }
    this.error = true;
  }

  forgot() {
    this.router.navigate(['/password-forgot']).then(() => {window.location.reload()});
  }

  register() {
    this.router.navigate(['/register']).then(() => {window.location.reload()});
  }
}

