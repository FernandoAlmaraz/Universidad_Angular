import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private logginService: LogginService) { }
  titulo = 'Listado De Personas';
  personas: Persona[] = [new Persona('Fernando', 'Almaraz'),
  new Persona("Gabriel", "De La Quintana"),
  new Persona("Andres", "Borda"),
  new Persona("Juan", "Perez"),
  new Persona("Andrea", "Garcia")];
  personaAgregada(persona: Persona) {
    this.personas.push(persona);
    this.logginService.enviarMensajeAConsola(this.personas + "  asdasd")
  }
}
