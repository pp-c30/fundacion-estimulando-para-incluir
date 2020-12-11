import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoriaService } from "../../servicios/categoria.service";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias:any = [];

  constructor(private activatedRoute: ActivatedRoute, private servicioCategoria:CategoriaService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idUsuario')) {
        // redirect
        return;
      }
      const idUsuario = paramMap.get('idUsuario');
      this.listarCategorias(idUsuario);
    });
  }

  listarCategorias(id) {
    this.servicioCategoria.getCategoriasUsuario(id).subscribe(
      resultado => this.categorias = resultado,
      error => console.log(error)
    )
  }

}
