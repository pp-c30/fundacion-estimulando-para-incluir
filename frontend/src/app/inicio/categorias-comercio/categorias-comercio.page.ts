import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from "../../servicios/categoria.service";
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-categorias-comercio',
  templateUrl: './categorias-comercio.page.html',
  styleUrls: ['./categorias-comercio.page.scss'],
})
export class CategoriasComercioPage implements OnInit {

  categorias;
  idUsuario;

  constructor(private route:Router, private activatedRoute: ActivatedRoute, private servicioCategoria:CategoriaService, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.idUsuario = paramMap.get('idComercio');
      this.listarCategorias(this.idUsuario);
    });
  }

  listarCategorias(id) {
    this.servicioCategoria.getCategoriasUsuario(id).subscribe(
      resultado => this.categorias = resultado,
      error => console.log(error)
    )
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

  funcion(id) {
    this.route.navigate(['/'+this.idUsuario+'/inicio/categorias-comercio/'+id+'/productos']);
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
