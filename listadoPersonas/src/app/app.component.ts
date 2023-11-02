import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/compat/app";
import { LoginServise } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginServise) {

  }
  ngOnInit() {
    // this.personas = this.personasService.personas;
    firebase.default.initializeApp({
      apiKey: "AIzaSyBtYMIu8H35p-EddTTR9GprTHvEKgwadkk",
      authDomain: "listado-personas-bf51f.firebaseapp.com",
    })
  }
  isAutenticado() {
    return this.loginService.isAutenticado();
  }
  salir() {
    this.loginService.logout()
  }
  // onPersonaAgregada(persona: Persona) {
  //   this.personasService.personaAgregada(persona)
  // }
}
