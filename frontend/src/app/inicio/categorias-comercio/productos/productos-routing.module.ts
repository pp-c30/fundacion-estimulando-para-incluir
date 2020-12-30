import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosPage } from './productos.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductosPage
      },
      {
        path: ':idProducto',
        loadChildren: () => import('./producto-comercio/producto-comercio.module').then( m => m.ProductoComercioPageModule)
      }
    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosPageRoutingModule {}
