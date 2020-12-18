import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from "../../../../servicios/categoria.service";
import { ICategoria } from "../../../../models/categoria";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-comercio',
  templateUrl: './producto-comercio.page.html',
  styleUrls: ['./producto-comercio.page.scss'],
})
export class ProductoComercioPage implements OnInit {


  formProducto:FormGroup;
  lista_categorias:ICategoria[] = [];
  idCategoria: string;
  constructor(private activatedRoute: ActivatedRoute, private fb:FormBuilder, private serviceCategoria:CategoriaService) 
  {
    this.formProducto = this.fb.group({
      nombreproducto:['',Validators.required],
      precioproducto:['',Validators.required],
      
    })
    this.obtenerCategorias(this.idCategoria);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idProducto')) {
        // redirect
        return;
      }
      const idProducto = paramMap.get('idProducto');
    });
  }

obtenerCategorias(id){
  this.serviceCategoria.getCategoriasUsuario(id).subscribe(
    respuesta => {
      this.lista_categorias = respuesta;
    },
    error => console.log(error)
  )
}

}
