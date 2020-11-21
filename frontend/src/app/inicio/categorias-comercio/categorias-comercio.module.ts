import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasComercioPageRoutingModule } from './categorias-comercio-routing.module';

import { CategoriasComercioPage } from './categorias-comercio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasComercioPageRoutingModule
  ],
  declarations: [CategoriasComercioPage]
})
export class CategoriasComercioPageModule {}
