import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Input()
  username!: string;
  @Input()
  password!: string;
  
  constructor(
  ) 
  { }

  ngOnInit() {
  }

  signUp() {
    
  }

  login() {
    
  }

}

