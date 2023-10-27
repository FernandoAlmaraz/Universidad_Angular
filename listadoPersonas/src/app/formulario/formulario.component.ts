import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>;
  // nombreInput: string = "";
  // apellidoInput: string = "";

  agregarPersona(nombreRef: HTMLInputElement, apellidoRef: HTMLInputElement) {
    this.personaCreada.emit(new Persona(nombreRef.value, apellidoRef.value));
  }
}
