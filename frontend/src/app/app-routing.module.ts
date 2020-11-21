import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'escaneo',
    loadChildren: () => import('./escaneo/escaneo.module').then( m => m.EscaneoPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./escaneo/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./escaneo/categorias/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'imagen',
    loadChildren: () => import('./imagen/imagen.module').then( m => m.ImagenPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'categorias-comercio',
    loadChildren: () => import('./inicio/categorias-comercio/categorias-comercio.module').then( m => m.CategoriasComercioPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./inicio/categorias-comercio/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./inicio/categorias-comercio/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'producto-comercio',
    loadChildren: () => import('./inicio/categorias-comercio/productos/producto-comercio/producto-comercio.module')
    .then( m => m.ProductoComercioPageModule)
  },
  {
    path: 'mis-datos',
    loadChildren: () => import('./inicio/mis-datos/mis-datos.module').then( m => m.MisDatosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro1',
    loadChildren: () => import('./login/registro1/registro1.module').then( m => m.Registro1PageModule)
  },
  {
    path: 'registro2',
    loadChildren: () => import('./login/registro2/registro2.module').then( m => m.Registro2PageModule)
  },
  {
    path: 'misdatos',
    loadChildren: () => import('./misdatos/misdatos.module').then( m => m.MisdatosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
