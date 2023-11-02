import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from './persona.model';
import { LoginServise } from './login/login.service';
@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient,
    private loginServise: LoginServise) { }
  cargarPersonas() {
    const token = this.loginServise.getIdToken()
    return this.httpClient.get<Persona[]>('https://listado-personas-bf51f-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }
  guardarPersonas(personas: Persona[]) {
    const token = this.loginServise.getIdToken()
    this.httpClient.put('https://listado-personas-bf51f-default-rtdb.firebaseio.com/datos.json?auth=' + token,
      personas).subscribe(
        response => console.log("Se han guardado las personas" + response),
        error => console.log("error al guardar personas" + error)
      );
  }

  modificarPersonaService(index: number, persona: Persona) {
    const token = this.loginServise.getIdToken()
    let url: string;
    url = 'https://listado-personas-bf51f-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    console.log(url)
    this.httpClient.put(url, persona)
      .subscribe(
        response => console.log("se ha actualizado la persona" + response),
        error => console.log("Error al actualizar " + error)
      );
  }

  eliminarPersona(index: number) {
    const token = this.loginServise.getIdToken()
    let url: string;
    url = 'https://listado-personas-bf51f-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    console.log(url)
    this.httpClient.delete(url)
      .subscribe(
        response => console.log("se ha actualizado la persona" + response),
        error => console.log("Error al actualizar " + error)
      );
  }
}
