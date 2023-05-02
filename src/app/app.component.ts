import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userBdd = [
    {
        id: 1,
        pseudo: "Maria",
        email: "williams@gmail.com",
        password: "williams123"
    },
    {
        id: 2,
        pseudo: "marc",
        email: "marc@gmail.com",
        password: "marc123"
    }
  ];

  constructor() {
    localStorage.setItem("users", JSON.stringify(this.userBdd));
  }
}

