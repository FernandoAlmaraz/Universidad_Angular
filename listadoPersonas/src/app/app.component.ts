import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // titulo = 'Listado De Personas';
  // personas: Persona[] = []
  // constructor(private logginService: LogginService,
  //   private personasService: PersonasService) {

  // }
  ngOnInit() {
    // this.personas = this.personasService.personas;
  }

  // onPersonaAgregada(persona: Persona) {
  //   this.personasService.personaAgregada(persona)
  // }
}
