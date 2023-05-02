import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(    
    public authService: AuthenticationService,
    public router: Router
    ) 
    { }

  ngOnInit() {
  }

}
