import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  valor: number;
  imagenes:number[];
  precios:number[];

  constructor() {
    this.valor = 0;
    this.imagenes = [2505, 29163, 10227];
    this.precios = [170, 200, 250];
  }

  ngOnInit() {
  }

  atras() {
    if (this.valor != 0) {
      this.valor--;
    }
    else {
      this.valor = this.imagenes.length - 1;
    }
  }
  adelante() {
    if (this.valor != this.imagenes.length - 1) {
      this.valor++;
    } else {
      this.valor = 0;
    }
  }

}
