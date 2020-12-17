import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AutenticacionService } from "../../servicios/autenticacion.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-registro1',
  templateUrl: './registro1.page.html',
  styleUrls: ['./registro1.page.scss'],
})
export class Registro1Page implements OnInit {

  formRegistro:FormGroup;

  constructor(private fb:FormBuilder, private autServ:AutenticacionService, private route:Router) { 
    this.formRegistro = this.fb.group({
      mail:['',[Validators.required]],
      contrasenia:['',[Validators.required]],
      nombreUsuario:['',[Validators.required]],      
      localidad:['',[Validators.required]],
      provincia:['',[Validators.required]],
      direccion:['',[Validators.required]]

    });
  }

  ngOnInit() {
  }

  registrar(){
    console.log('hola mundo')
    this.autServ.register(this.formRegistro.value).subscribe(
      respuesta => {
        localStorage.setItem('token',String(respuesta));
        this.formRegistro.reset();
        this.route.navigate(['login'])
      }
    )
  }

}
