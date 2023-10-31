import { Egreso } from "./agreso.model";

export class EgresoService {
    egresos: Egreso[] = [
        new Egreso("Pago-Internet", 500),
        new Egreso("Ropa", 150)
    ];
    constructor() {

    }
    eliminar(egreso: Egreso) {
        const indice: number = this.egresos.indexOf(egreso)
        this.egresos.splice(indice, 1);
    }
}