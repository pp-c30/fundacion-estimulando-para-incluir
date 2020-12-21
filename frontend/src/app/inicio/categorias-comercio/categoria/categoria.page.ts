import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  formCategoria:FormGroup;
  idUsuario;

  constructor(private fb:FormBuilder, private activatedRoute:ActivatedRoute) {
    
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idComercio')) {
        // redirect
        return;
      }
      this.idUsuario = paramMap.get('idComercio');
    });
  }

}
