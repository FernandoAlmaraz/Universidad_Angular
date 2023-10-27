import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private logginService: LogginService,
    private personasService: PersonasService) {
    this.personasService.saludar.subscribe(
      (indice: string) => alert("el indicie es: " + indice)
    )
  }
  //@Output() personaCreada = new EventEmitter<Persona>;
  // nombreInput: string = "";
  // apellidoInput: string = "";

  @ViewChild('nombreRef') nombreRef!: ElementRef;
  @ViewChild('apellidoRef') apellidoRef!: ElementRef;

  agregarPersona() {
    let PerCreada = new
      Persona(this.nombreRef.nativeElement.value,
        this.apellidoRef.nativeElement.value)
    //this.personaCreada.emit(PerCreada);
    //this.logginService.enviarMensajeAConsola("Eviamos Persona: " + PerCreada.nombre + " " + PerCreada.apellido)
    this.personasService.personaAgregada(PerCreada)
  }
}
