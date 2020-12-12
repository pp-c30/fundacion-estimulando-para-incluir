import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoriaService } from "../../servicios/categoria.service";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias:any = [];
  idUsuario;

  constructor(private activatedRoute: ActivatedRoute, private servicioCategoria:CategoriaService, private route:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idUsuario')) {
        // redirect
        return;
      }
      this.idUsuario = paramMap.get('idUsuario');
      this.listarCategorias(this.idUsuario);
    });
  }

  listarCategorias(id) {
    this.servicioCategoria.getCategoriasUsuario(id).subscribe(
      resultado => this.categorias = resultado,
      error => console.log(error)
    )
  }

  redireccion(id) {
    this.route.navigate(['/escaneo/', this.idUsuario,'categorias', id]);
  }

  remove() {
    let selector = document.getElementsByTagName('app-categorias');
    selector[0].remove();
  }

}