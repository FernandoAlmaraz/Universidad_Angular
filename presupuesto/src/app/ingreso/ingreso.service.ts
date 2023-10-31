import { Ingreso } from "./ingreso.model";

export class IngresoService {
    ingresos: Ingreso[] = [
        new Ingreso("Salario", 6000),
        new Ingreso("Mesada", 200)
    ];
    constructor() {

    }
}