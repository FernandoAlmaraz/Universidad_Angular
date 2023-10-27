import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listadoPersonas';
  personas: Persona[] = [new Persona('Fernando', 'Almaraz'), new Persona("Gabriel", "De La Quintana")];
}
