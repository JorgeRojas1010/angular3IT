import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: any;
  public newData: any;
  public serie: boolean;
  public unit: boolean;

  constructor() {
    this.serie = false;
    this.unit = false;
  }

  ngOnInit(): void {
    if (!this.data.serie) {
      const { uf, ivp, dolar, dolar_intercambio, euro, ipc, utm, imacec, tpm, libra_cobre, tasa_desempleo, bitcoin } = this.data;
      this.newData = [ uf, ivp, dolar, dolar_intercambio, euro, ipc, utm, imacec, tpm, libra_cobre, tasa_desempleo, bitcoin ];
      this.serie = false;
    } else {
      const test = this.data.unidad_medida;
      this.unit = (test !== 'Porcentaje') ? false : true;
      console.log('que eres', this.data.unidad_medida);
      this.newData = this.data.serie
      this.serie = true;
    }
  }
}
