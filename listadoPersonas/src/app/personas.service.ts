import { Persona } from "./persona.model";

export class PersonasService {
    personas: Persona[] = [new Persona('Fernando', 'Almaraz'),
    new Persona("Gabriel", "De La Quintana"),
    new Persona("Andres", "Borda"),
    new Persona("Juan", "Perez"),
    new Persona("Andrea", "Garcia")];
    personaAgregada(persona: Persona) {
        this.personas.push(persona);
        // this.logginService.enviarMensajeAConsola(this.personas + "  asdasd")
    }
}