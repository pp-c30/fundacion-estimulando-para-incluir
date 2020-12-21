import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-comercio',
  templateUrl: './producto-comercio.page.html',
  styleUrls: ['./producto-comercio.page.scss'],
})
export class ProductoComercioPage implements OnInit {

  
  constructor(private activatedRoute: ActivatedRoute) 
  {
    
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idProducto')) {
        // redirect
        return;
      }
      const idProducto = paramMap.get('idProducto');
    });
  }

}
