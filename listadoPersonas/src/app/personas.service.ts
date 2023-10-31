import { Injectable, EventEmitter } from "@angular/core";
import { LogginService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {
    personas: Persona[] = [new Persona('Fernando', 'Almaraz'),
    new Persona("Gabriel", "De La Quintana"),
    new Persona("Andres", "Borda"),
    new Persona("Juan", "Perez"),
    new Persona("Andrea", "Garcia")];
    saludar = new EventEmitter<string>();
    constructor(private logginService: LogginService) { }
    personaAgregada(persona: Persona) {
        this.personas.push(persona);
        this.logginService.enviarMensajeAConsola(persona.apellido + "  desde servico personasS")
    }

    encontrarPersona(index: number) {
        let persona: Persona = this.personas[index]
        return persona;
    }
    modificarPersona(index: number, persona: Persona) {
        let persona1 = this.personas[index]
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }

    eliminarPersona(index: number) {
        this.personas.splice(index, 1);
    }
}