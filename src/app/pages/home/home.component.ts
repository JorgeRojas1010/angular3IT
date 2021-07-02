import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/core/services/api.service';

export interface Date {
  day: number,
  month: number,
  year: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public content = [
    {info: 'Lorem ipsum dolor sit amet consectetur 1.'},
    {info: 'Lorem ipsum dolor sit amet consectetur 2.'},
    {info: 'Lorem ipsum dolor sit amet consectetur 3.'},
    {info: 'Lorem ipsum dolor sit amet consectetur 4.'}
  ];
  public data: any;
  public formData: FormGroup;
  public optionSelect: any;
  public viewSimulator: boolean = true;
  public isGraph: boolean = false;

  constructor(
    private apiServise: ApiService,
    private fb: FormBuilder,
  ) {
    this.formData = this.fb.group({
      dateFirst: [''],
      dateEnd: [''],
      indicator: [''],
      searchGeneral: ['']
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(indicator?: string, date?: string) {
    this.apiServise.getData(indicator, date).subscribe(res => {
      this.data = '';
      if (!res.serie) {
        const { uf, ivp, dolar, dolar_intercambio, euro, ipc, utm, imacec, tpm, libra_cobre, tasa_desempleo, bitcoin } = res;
        this.data = [ uf, ivp, dolar, dolar_intercambio, euro, ipc, utm, imacec, tpm, libra_cobre, tasa_desempleo, bitcoin ];
        this.optionSelect = this.data;
      } else {
        const { codigo, nombre, unidad_medida } = res;
        const dataRes = res.serie.map((info: any) => {
          return {...info, codigo, nombre, unidad_medida}
        })
        this.data = dataRes;
      }
    });
  }

  public searchFilter() {
    const indicator = this.formData.controls.indicator.value;
    let dateFirst = this.dateFormat(this.formData.controls.dateFirst.value);
    const dateEnd = this.dateFormat(this.formData.controls.dateEnd.value);
    const search = this.formData.controls.searchGeneral.value;

    if (search !== '') { // Filtrar Buscador general
      this.data = this.optionSelect.filter((res: any) => {
        return res.nombre.toLowerCase() === search;
      });
    } else if (dateEnd !== '' && dateFirst !== '') { // Filtrar rango de fechas dentro de un indicador
      const info = this.data.filter((res: any) => {
        return this.changeDateGetTime(res.fecha) >= this.changeDateGetTime(dateFirst) && 
        this.changeDateGetTime(res.fecha) <= this.changeDateGetTime(dateEnd);
      });
      this.data = info;
    } else if (search === '' && indicator === '' && (dateFirst === '' || dateEnd === '')) { // Data de indicadores
      this.data = this.optionSelect;
    } else if (indicator === '' && dateFirst !== '') { // Data de indicadores
      this.data = this.optionSelect;
    } else if (indicator !== '' && dateFirst !== '') { // getData API "indicador + fecha"
      this.getData(indicator, this.dateFormatApi(this.formData.controls.dateFirst.value));
    } else if (indicator !== '' && dateFirst === '') { // getData API "indicador"
      this.getData(indicator);
    }
  }

  private dateFormat(value: Date) {
    return value ? `${value.year}-${value.month}-${value.day}` : '';
  }

  private dateFormatApi(value: Date) {
    return value ? `${value.day}-${value.month}-${value.year}` : '';
  }

  private changeDateGetTime(dateStr: any) {
    return new Date(dateStr).getTime()
  }

  public changeViewSimulator(e: any) {
    const { route, code } = e;
    this.data = '';
    this.getData(code)
    this.viewSimulator = (route === 'home') ? true : false;
    this.isGraph = (route === 'graph') ? true : false;
  }
}
