import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplainPage } from './explain.page';

const routes: Routes = [
  {
    path: '',
    component: ExplainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule {}
