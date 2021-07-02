import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() newData: any;
  @Input() isPrice: boolean = false;
  @Output() sendInfo = new EventEmitter();
  public serie: boolean;
  public unit: boolean;

  constructor(private router: Router) {
    this.serie = false;
    this.unit = false;
  }

  ngOnInit(): void {
    if (!this.newData.serie) {
      this.serie = false;
    } else {
      const test = this.newData.unidad_medida;
      this.unit = (test !== 'Porcentaje') ? false : true;
      this.newData = this.newData.serie;
      this.serie = true;
    }
  }

  navigator(route: string, code: string) {
    this.sendInfo.emit({ route, code });
  }
}
