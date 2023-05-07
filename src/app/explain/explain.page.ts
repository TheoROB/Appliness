import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-explain',
  templateUrl: './explain.page.html',
  styleUrls: ['./explain.page.scss'],
})
export class ExplainPage implements OnInit {

  switchNumber: number = 0;
  informationUsers: Array<any> = [];

  constructor(
    public router: Router,
    public ngFireAuth: AngularFireAuth,
    public authService: AuthenticationService,
    public firestore: AngularFirestore
    )
    {}

  ngOnInit() {
  }

  switch() {
    if (this.switchNumber === 2)
    {
      return this.router.navigate(['/accueil']);
    }
    this.switchNumber++;

  }

  info (action: any, age: any, department:any, interest: any)
  {
    this.informationUsers = [
      action.value,
      age.value,
      department.value,
      interest.value
    ]

    this.switch();
  }

  mood(mood: string){
    this.informationUsers.push(mood);
    this.ngFireAuth.currentUser.then((user: any) => {
      this.firestore.collection("informationUsers").add({
        email: user.email,
        action: this.informationUsers[0],
        age: this.informationUsers[1],
        department: this.informationUsers[2],
        interest: this.informationUsers[3],
        mood: this.informationUsers[4],
      });
      user?.updateProfile({photoURL: "valide"});
    });
    this.switch();
  }
}
