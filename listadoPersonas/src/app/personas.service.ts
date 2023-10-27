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

}