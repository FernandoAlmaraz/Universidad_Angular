import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Titulo = 'Aplicacion de Calculadora';
  resultado = 0;
  A: number = 0;
  B: number = 0;

  valorA(event: Event) {
    this.A = Number((<HTMLInputElement>event.target).value);
  }
  valorB(event: Event) {
    this.B = Number((<HTMLInputElement>event.target).value);
  }
  sumar() {
    return this.resultado = this.A + this.B;
  }
}
