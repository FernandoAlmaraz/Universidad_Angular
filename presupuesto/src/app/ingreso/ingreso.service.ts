import { Ingreso } from "./ingreso.model";

export class IngresoService {
    ingresos: Ingreso[] = [
        new Ingreso("Salario", 6000),
        new Ingreso("Venta PSP", 200)
    ];
    constructor() {

    }
    eliminar(ingreso: Ingreso) {
        const indice: number = this.ingresos.indexOf(ingreso)
        this.ingresos.splice(indice, 1);
    }
}