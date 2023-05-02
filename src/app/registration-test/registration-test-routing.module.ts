import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationTestPage } from './registration-test.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationTestPageRoutingModule {}
