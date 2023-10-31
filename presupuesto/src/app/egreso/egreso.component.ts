import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './agreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() ingresoTotal!: number;
  constructor(private egresosService: EgresoService) {

  }
  ngOnInit() {
    this.egresos = this.egresosService.egresos;
  }
  eliminarEgreso(egreso: Egreso) {
    this.egresosService.eliminar(egreso)
  }
  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }
}
