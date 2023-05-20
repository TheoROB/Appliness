import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilFriendPage } from './profil-friend.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilFriendPage
  },
  {
    path: ':id',
    component: ProfilFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilFriendPageRoutingModule {}
