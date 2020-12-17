import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoComercioPageRoutingModule } from './producto-comercio-routing.module';

import { ProductoComercioPage } from './producto-comercio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormBuilder,
    FormGroup,
    Validators,
    ProductoComercioPageRoutingModule
  ],
  declarations: [ProductoComercioPage]
})
export class ProductoComercioPageModule {}
