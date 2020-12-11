import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasPageRoutingModule } from './categorias-routing.module';

import { CategoriasPage } from './categorias.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CategoriasPage]
})
export class CategoriasPageModule {}
