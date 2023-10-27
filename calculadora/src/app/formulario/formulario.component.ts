import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() resultado = new EventEmitter<number>();
  valorA = 0;
  valorB = 0;
  result = 0;
  sumar() {
    this.result = this.valorA + this.valorB;
    this.resultado.emit(this.result);
  }

}
