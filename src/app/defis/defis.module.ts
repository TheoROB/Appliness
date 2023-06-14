import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefisPageRoutingModule } from './defis-routing.module';

import { DefisPage } from './defis.page';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DefisPageRoutingModule],
  declarations: [DefisPage, ProgressBarComponent],
})
export class DefisPageModule {}
