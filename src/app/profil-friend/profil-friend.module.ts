import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilFriendPageRoutingModule } from './profil-friend-routing.module';

import { ProfilFriendPage } from './profil-friend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilFriendPageRoutingModule
  ],
  declarations: [ProfilFriendPage]
})
export class ProfilFriendPageModule {}
