import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  myImagePath = '../../assets/accueil.png';

  data = [
    {
      title: 'Défis du jour',
    },
    {
      title: 'Evènements de la semaine',
    },
    {
      title: 'Mes associations',
    },
  ];

  constructor(
    public authService: AuthenticationService,
    public ngFireAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.ngFireAuth.currentUser.then((user: any) => {
      console.log(user);
    });
  }
}
