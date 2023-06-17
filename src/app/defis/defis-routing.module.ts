import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefisPage } from './defis.page';

const routes: Routes = [
  {
    path: '',
    component: DefisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefisPageRoutingModule {}
