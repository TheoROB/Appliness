import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'explain',
    loadChildren: () =>
      import('./explain/explain.module').then((m) => m.ExplainPageModule),
  },
  {
    path: 'password-forgot',
    loadChildren: () =>
      import('./password-forgot/password-forgot.module').then(
        (m) => m.PasswordForgotPageModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./registration-test/registration-test.module').then(
        (m) => m.RegistrationTestPageModule
      ),
  },
  {
    path: 'verify-email',
    loadChildren: () =>
      import('./verify-email/verify-email.module').then(
        (m) => m.VerifyEmailPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-test/login-test.module').then(
        (m) => m.LoginTestPageModule
      ),
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'tabnav',
    loadChildren: () =>
      import('./tabnav/tabnav.module').then((m) => m.TabnavPageModule),
  },
  {
    path: 'create-event',
    loadChildren: () => import('./create-event/create-event.module').then( m => m.CreateEventPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
