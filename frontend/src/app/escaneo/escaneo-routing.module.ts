import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscaneoPage } from './escaneo.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EscaneoPage
      },
      {
        path: ':idUsuario',
        loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscaneoPageRoutingModule {}
