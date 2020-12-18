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
>>>>>>> 6bd0435804ed467dcae01f957d3d078d81b7a618
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasComercioPageRoutingModule {}
