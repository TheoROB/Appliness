import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
  {
    path: 'explain',
    loadChildren: () => import('./explain/explain.module').then(m => m.ExplainPageModule)
  },
  {
    path: 'password-forgot',
    loadChildren: () => import('./password-forgot/password-forgot.module').then( m => m.PasswordForgotPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./registration-test/registration-test.module').then( m => m.RegistrationTestPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login-test/login-test.module').then( m => m.LoginTestPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
