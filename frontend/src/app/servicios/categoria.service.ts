import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  getCategoriasUsuario(id) {
    return this.http.get('http://localhost:3000/'+id+'/categorias');
  }

}
