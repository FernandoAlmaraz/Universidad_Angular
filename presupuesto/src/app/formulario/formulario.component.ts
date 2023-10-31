import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/agreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipoEvento: string = "ingresoOperacion";
  descripcionInput: string = "";
  valorInput: number = 0;
  constructor(private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService) { }
  ngOnInit(): void {

  }
  tipoOperacion(evento: any) {
    this.tipoEvento = evento.target.value;
  }
  agregarValor() {
    if (this.tipoEvento === "ingresoOperacion")
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput))
    else
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput))
  }
}
