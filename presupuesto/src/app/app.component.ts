import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/agreso.model';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresos: Ingreso[] = []
  egresos: Egreso[] = []
  constructor(private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService) {

    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

  getIngresoTotal(): number {
    let ingresoTotal!: number;
    this.ingresos.forEach(ingreso => {
      ingresoTotal = + ingreso.valor;
    });
    return ingresoTotal;
  }
  getEgresoTotal(): number {
    let egresoTotal!: number;
    this.egresos.forEach(egreso => {
      egresoTotal = - egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(): number {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(): number {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
