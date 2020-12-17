import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formIngreso:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.formIngreso = this.fb.group({
      mail:['',[Validators.required]],
      contrasenia:['',[Validators.required]]
    })
  }

  ngOnInit() {
  }

  ingresar(){

  }
}
