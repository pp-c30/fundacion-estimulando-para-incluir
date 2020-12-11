import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http:HttpClient) { }

  getImagenesProducto(id) {
    return this.http.get('http://localhost:3000/'+id+'/imagenes');
  }

}
