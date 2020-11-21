import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoComercioPage } from './producto-comercio.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoComercioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoComercioPageRoutingModule {}
