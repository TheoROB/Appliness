import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefisPageRoutingModule } from './defis-routing.module';

import { DefisPage } from './defis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefisPageRoutingModule
  ],
  declarations: [DefisPage]
})
export class DefisPageModule {}
