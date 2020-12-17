import { Component, OnInit } from '@angular/core';
import { IProducto } from '../../../models/producto';
import { ProductoService } from "../../../servicios/producto.service";

import { CategoriaService } from "../../../servicios/categoria.service";
import { ICategoria } from "../../../models/categoria";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
   
  lista_productos:IProducto[] = [];

  idCategoria: string;
  constructor(private activatedRoute: ActivatedRoute, private servicioProducto: ProductoService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idcategoria')) {
        // redirect
        return;
      }
      this.idCategoria = paramMap.get('idcategoria');
    });

    this.obtenerProductos(this.idCategoria);
  }

  obtenerProductos(id){
    this.servicioProducto.getProductosCategoria(id).subscribe(
      respuesta => {
        this.lista_productos = respuesta;
      },
      error => console.log(error)
    )
  }


}
