import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formIngreso:FormGroup;

  usuario; 

  constructor(private fb:FormBuilder, private autServ:AutenticacionService, private route:Router) { 
    this.formIngreso = this.fb.group({
      nombreUsuario:['',[Validators.required]],
      contrasenia:['',[Validators.required]]
    })
  }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.formIngreso.value);
    this.autServ.login(this.formIngreso.value).subscribe(
      respuesta => {
        localStorage.setItem('token',String(respuesta));
        this.route.navigate(['1/inicio']);
      }
    )
  }
}
