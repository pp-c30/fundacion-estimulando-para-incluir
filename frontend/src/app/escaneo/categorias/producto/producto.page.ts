import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  valor: number;
  imagenes;
  productos;
  idCategoria

  constructor(private route:Router, private activatedRoute:ActivatedRoute, private servicioProducto:ProductoService, private servicioImagen:ImagenService) {
    this.valor = 0;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      if (!paramMap.has('idCategoria')) {
        // redirect
        return;
      }
      this.idCategoria = paramMap.get('idCategoria');
      this.obtenerProductos(this.idCategoria);
      setTimeout(() => { this.obtenerImagenes(this.productos[this.valor].id); }, 500);
      console.log(this.imagenes);
    });
  }

  obtenerProductos(id) {
    console.log(id);
    this.servicioProducto.getProductosCategoria(id).subscribe(
      resultado => this.productos = resultado,
      error => console.log(error)
    );
    console.log(this.productos);
  }

  obtenerImagenes(id) {
    this.servicioImagen.getImagenesProducto(id).subscribe(
      resultado => this.imagenes = resultado,
      error => console.log(error)
    );
  }

  atras() {
    if (this.valor != 0) {
      this.valor--;
      this.obtenerImagenes(this.productos[this.valor].id);
    }
    else {
      this.valor = this.productos.length - 1;
      this.obtenerImagenes(this.productos[this.valor].id);
    }
  }
  adelante() {
    if (this.valor != this.productos.length - 1) {
      this.valor++;
      this.obtenerImagenes(this.productos[this.valor].id);
    } else {
      this.valor = 0;
      this.obtenerImagenes(this.productos[this.valor].id);
    }
  }

  borrarSelector() {
    this.route.navigate(['/escaneo/', this.idCategoria, '/categorias']);
    let selector = document.getElementsByTagName('app-producto');
    console.log(selector);
    selector[0].remove();
    selector[0].toggleAttribute('hidden');
  }

}
