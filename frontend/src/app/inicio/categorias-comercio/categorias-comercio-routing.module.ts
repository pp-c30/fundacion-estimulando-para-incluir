import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasComercioPage } from './categorias-comercio.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasComercioPage
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasComercioPageRoutingModule {}