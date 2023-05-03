import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-explain',
  templateUrl: './explain.page.html',
  styleUrls: ['./explain.page.scss'],
})
export class ExplainPage implements OnInit {

  switchNumber: number = 0;

  constructor(
    public router: Router,
    public ngFireAuth: AngularFireAuth,
    public authService: AuthenticationService
    )
    { }

  ngOnInit() {
  }

  switch() {
    if (this.switchNumber === 2)
    {
      return this.router.navigate(['/accueil']);
    }
    this.switchNumber++;

  }

  info (action: any, age: any, departement:any, interet: any)
  {
    localStorage.setItem('info',
      "action: "+action.value+", " +
      "age: "+age.value+", " +
      "departement: "+departement.value+", " +
      "interet: "+interet.value+", "
    )

    this.switch();
  }

  mood(mood: string){
    let info = localStorage.getItem('info');
    this.ngFireAuth.currentUser.then((user: any) => {
      user?.updateProfile({
        photoURL:
          info + " mood: "+mood
      });
    });
    localStorage.removeItem("info");
    this.switch();
  }
}
