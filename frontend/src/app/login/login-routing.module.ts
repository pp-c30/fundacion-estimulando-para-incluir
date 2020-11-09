import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },  {
    path: 'registro1',
    loadChildren: () => import('./registro1/registro1.module').then( m => m.Registro1PageModule)
  },
  {
    path: 'registro2',
    loadChildren: () => import('./registro2/registro2.module').then( m => m.Registro2PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
