import { Egreso } from "./agreso.model";

export class EgresoService {
    egresos: Egreso[] = [
        new Egreso("Pago-Internet", 500),
        new Egreso("Ropa", 150)
    ];
    constructor() {

    }
}