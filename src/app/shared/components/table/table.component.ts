import { Component, Input, OnInit } from '@angular/core';

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() newData: any;
  serie: boolean;
  unit: boolean;



  page = 1;
  pageSize = 10;
  collectionSize: number = 0;

  constructor() {
    this.unit = false;
    this.serie = false;
  }
  
  
  ngOnInit(): void {
    if (this.newData) {
      this.refreshCountries();
    }
  }
  
  refreshCountries() {
    this.newData.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
