import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.page.html',
  styleUrls: ['./password-forgot.page.scss'],
})
export class PasswordForgotPage implements OnInit {

  constructor(private router: Router, public authService: AuthenticationService) { }

  ngOnInit() {
  }

  dataUser = {
    email: ''
  }

  valid: boolean = false;
  error: boolean = false;

  email() {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;   
    if (!regex.test(this.dataUser.email)) {
      this.error = true;
      return;
    }

    this.valid = true;
  }

  login() {
    this.router.navigate(['/login']);
  }

}
