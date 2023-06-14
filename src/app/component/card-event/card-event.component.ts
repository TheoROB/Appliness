import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss'],
})
export class CardEventComponent  implements OnInit {

  isExpanded = false;

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
  
  constructor() { }

  ngOnInit() {}

}
