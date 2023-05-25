import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from '../shared/authentication-service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  informationUsers: Observable<any[]>;

  constructor(
    public authService: AuthenticationService,
    public ngFireAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    public router: Router
  ) {
    console.log(sessionStorage.getItem('user'));
    const user = JSON.parse(sessionStorage.getItem('user')!);
    this.informationUsers = this.firestore
      .collection('informationUsers')
      .valueChanges();

    this.informationUsers.forEach((value) => {
      value.forEach((infoUser) => {
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

        if (infoUser.email === user.email) {
          sessionStorage.setItem('infoUser', JSON.stringify(infoUser));
        }
      });
    });
  }

  ngOnInit() {}

  testSession() {
    let obj = JSON.parse(sessionStorage.getItem('infoUser')!);
    console.log(obj);
  }
}
