import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: '',
    component: TabnavPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () =>
          import('../accueil/accueil.module').then((m) => m.AccueilPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
