import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'login', redirectTo: '/auth/login' },
  { path: 'auth', loadChildren: () => import('./screens/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'home', loadChildren: () => import('./screens/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
