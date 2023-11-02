import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from './persona.model';
@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }
  cargarPersonas() {
    return this.httpClient.get<Persona[]>('https://listado-personas-bf51f-default-rtdb.firebaseio.com/datos.json');
  }
  guardarPersonas(personas: Persona[]) {
    this.httpClient.put('https://listado-personas-bf51f-default-rtdb.firebaseio.com/datos.json',
      personas).subscribe(
        response => console.log("Se han guardado las personas" + response),
        error => console.log("error al guardar personas" + error)
      );
  }

  modificarPersonaService(index: number, persona: Persona) {
    let url: string;
    url = 'https://listado-personas-bf51f-default-rtdb.firebaseio.com/datos/' + index + '.json';
    console.log(url)
    this.httpClient.put(url, persona)
      .subscribe(
        response => console.log("se ha actualizado la persona" + response),
        error => console.log("Error al actualizar " + error)
      );
  }

  eliminarPersona(index: number) {
    let url: string;
    url = 'https://listado-personas-bf51f-default-rtdb.firebaseio.com/datos/' + index + '.json';
    console.log(url)
    this.httpClient.delete(url)
      .subscribe(
        response => console.log("se ha actualizado la persona" + response),
        error => console.log("Error al actualizar " + error)
      );
  }
}
