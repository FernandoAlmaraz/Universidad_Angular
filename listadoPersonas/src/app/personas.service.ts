import { Injectable, EventEmitter } from "@angular/core";
import { LogginService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { DataService } from "./data.service";

@Injectable()
export class PersonasService {
    personas: Persona[] = [];
    saludar = new EventEmitter<string>();
    constructor(private dataService: DataService) { }

    setPersonas(personas: Persona[]) {
        this.personas = personas;
    }

    obtenerPersonas() {
        return this.dataService.cargarPersonas();
    }

    personaAgregada(persona: Persona) {
        if (this.personas == null) {
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas)
    }

    encontrarPersona(index: number) {
        let persona: Persona = this.personas[index]
        return persona;
    }
    modificarPersona(index: number, persona: Persona) {
        let persona1 = this.personas[index]
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        //  this.dataService.modificarPersonaService(index, persona);
    }

    eliminarPersona(index: number) {
        this.personas.splice(index, 1);
        this.dataService.eliminarPersona(index);
        //se vuelve a agregar el arreglo
        this.modificarPersonas()
    }
    modificarPersonas() {
        if (this.personas != null) {
            this.dataService.guardarPersonas(this.personas);
        }
    }
}