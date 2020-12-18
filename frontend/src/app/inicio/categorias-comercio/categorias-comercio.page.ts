import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from "../../servicios/categoria.service";

@Component({
  selector: 'app-categorias-comercio',
  templateUrl: './categorias-comercio.page.html',
  styleUrls: ['./categorias-comercio.page.scss'],
})
export class CategoriasComercioPage implements OnInit {

  categorias;

  constructor(private activatedRoute: ActivatedRoute, private servicioCategoria:CategoriaService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      let idUsuario = paramMap.get('idComercio');
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
