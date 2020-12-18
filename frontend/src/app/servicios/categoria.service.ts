import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategoria } from "../models/categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  getCategoriasUsuario(id) {
    return this.http.get<ICategoria[]>('http://localhost:3000/'+id+'/categorias');
  }

}
