import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registro2Page } from './registro2.page';

const routes: Routes = [
  {
    path: '',
    component: Registro2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registro2PageRoutingModule {}
