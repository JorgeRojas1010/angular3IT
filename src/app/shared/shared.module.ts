import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { TableModule } from './components/table/table.module';

@NgModule({
  declarations: [
    ListComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
  ],
  exports: [
    ListComponent,
    TableComponent,
  ]
})
export class SharedModule { }