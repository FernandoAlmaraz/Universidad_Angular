import { Component } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  titulo = 'Listado De Personas';
  personas: Persona[] = []
  constructor(
    private personasService: PersonasService,
    private router: Router) {

  }
  ngOnInit() {
    this.personas = this.personasService.personas;
  }
  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}
