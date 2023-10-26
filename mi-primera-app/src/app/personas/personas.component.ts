import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  //styleUrls: ['./personas.component.css'],
  // Se puede definir en linea el estilo como
  //el template
  styles: [`
    h1{
      color:blue;
    }
    `]
})
export class PersonasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  deshabilitar = false;
  mensaje = "Persona no agregada";
  titulo = "inge";
  agregarPersona() {
    this.mensaje = "Persona agregada."
  }
  // event binding
  // modificarTitulo(event: Event) {
  //   this.titulo = (<HTMLInputElement>event.target).value;
  // }

}
