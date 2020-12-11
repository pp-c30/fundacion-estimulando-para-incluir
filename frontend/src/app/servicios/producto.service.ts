import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  getProductosCategoria(id) {
    return this.http.get('http://localhost:3000/'+id+'/productos');
  }

}
