import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  temaOscuro: boolean;

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.temaOscuro = prefersDark.matches;
  }

  cambio(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

}
