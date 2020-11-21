import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoComercioPageRoutingModule } from './producto-comercio-routing.module';

import { ProductoComercioPage } from './producto-comercio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoComercioPageRoutingModule
  ],
  declarations: [ProductoComercioPage]
})
export class ProductoComercioPageModule {}
