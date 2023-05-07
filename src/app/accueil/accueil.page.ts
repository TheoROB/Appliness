import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import {count, Observable} from "rxjs";
import {Router} from "@angular/router";

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
    console.log(sessionStorage.getItem("user"))
    const user = JSON.parse(sessionStorage.getItem('user')!);
    this.informationUsers = this.firestore.collection("informationUsers").valueChanges();

    this.informationUsers.forEach((value) => {
      value.forEach((infoUser) =>{

        if (infoUser.email === user.email)
        {
          sessionStorage.setItem("infoUser", JSON.stringify(infoUser));
        }
      });
    });
  }

  ngOnInit() {
  }

  testSession()
  {
    let obj = JSON.parse(sessionStorage.getItem('infoUser')!);
    console.log(obj);
  }
}
