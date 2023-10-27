import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado De Personas';
  personas: Persona[] = [new Persona('Fernando', 'Almaraz'),
  new Persona("Gabriel", "De La Quintana"),
  new Persona("Andres", "Borda"),
  new Persona("Juan", "Perez"),
  new Persona("Andrea", "Garcia")];
  nombreInput: string = "";
  apellidoInput: string = "";

  agregarPersona() {
    this.personas.push(new Persona(this.nombreInput, this.apellidoInput));
  }
}
