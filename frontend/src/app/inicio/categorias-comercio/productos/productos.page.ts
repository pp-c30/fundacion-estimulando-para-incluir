import { Component, OnInit } from '@angular/core';
import { ProductoService } from "src/app/servicios/producto.service";
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
   
  productos;

  idCategoria: string;
  constructor(private activatedRoute: ActivatedRoute, private servicioProducto: ProductoService, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idCategoria')) {
        // redirect
        return;
      }
      this.idCategoria = paramMap.get('idCategoria');
    });
    console.log(this.idCategoria);
    this.obtenerProductos(this.idCategoria);
  }

  obtenerProductos(id){
    console.log(id);
    this.servicioProducto.getProductosCategoria(id).subscribe(
      respuesta =>  this.productos = respuesta,
      error => console.log(error)
    );
    console.log(this.productos);
  }

  click(evt, id, nombre) {
    switch (evt.which) {
      case 3:
          evt.preventDefault();
          this.presentActionSheet(id, nombre);
          console.log(evt.which);
          break;
      default:
        break;
    }
  }

  funcion() {
    console.log('Hola Mundo');
  }

  async presentActionSheet(id, nombre) {
    const actionSheet = await this.actionSheetController.create({
      header: nombre,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log(id+' eliminado');
        }
      }, {
        text: 'Editar',
        icon: 'pencil-outline',
        handler: () => {
          console.log(id+' para editar');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
