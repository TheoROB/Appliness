import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defis',
  templateUrl: './defis.page.html',
  styleUrls: ['./defis.page.scss'],
})
export class DefisPage implements OnInit {
  myImagePath = '../../assets/background/defis.png';

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor() {}

  ngOnInit() {}
}
