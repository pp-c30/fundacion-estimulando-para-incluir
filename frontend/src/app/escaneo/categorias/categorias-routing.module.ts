import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasPage } from './categorias.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CategoriasPage
      },
      {
        path: ':idCategoria',
        loadChildren: () => import('./producto/producto.module').then( m => m.ProductoPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasPageRoutingModule {}
