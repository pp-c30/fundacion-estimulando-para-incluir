import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasComercioPage } from './categorias-comercio.page';

const routes: Routes = [
  {
    path: '',
    children: [
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
    ]
  },
<<<<<<< HEAD
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'idcategoria/productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  }
=======
  
>>>>>>> 0c4cdf81e53ab0e119241241acd8cabc67d68e06
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasComercioPageRoutingModule {}
