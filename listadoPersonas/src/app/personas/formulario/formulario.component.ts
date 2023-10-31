import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  index: number = 0;
  @Output() personaCreada = new EventEmitter<Persona>;
  nombreInput: string = "";
  apellidoInput: string = "";
  constructor(private logginService: LogginService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute) {
    this.personasService.saludar.subscribe(
      (indice: string) => alert("el indicie es: " + indice)
    )
  }
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if (this.index) {
      let persona: Persona = this.personasService.encontrarPersona(this.index)
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido
    }
  }
  // @ViewChild('nombreRef') nombreRef!: ElementRef;
  // @ViewChild('apellidoRef') apellidoRef!: ElementRef;

  OnagregarPersona() {

    let PerCreada = new
      Persona(this.nombreInput, this.apellidoInput)
    if (this.index) {
      this.personasService.modificarPersona(this.index, PerCreada)
    }
    else {
      this.personasService.personaAgregada(PerCreada)
    }
    this.router.navigate(['personas'])
    // Persona(this.nombreRef.nativeElement.value,
    // this.apellidoRef.nativeElement.value)
    //this.personaCreada.emit(PerCreada);
    //this.logginService.enviarMensajeAConsola("Eviamos Persona: " + PerCreada.nombre + " " + PerCreada.apellido)
  }
  eliminarPersona() {
    if (this.index != null) {
      this.personasService.eliminarPersona(this.index)
    }
    this.router.navigate(['personas'])
  }
}
