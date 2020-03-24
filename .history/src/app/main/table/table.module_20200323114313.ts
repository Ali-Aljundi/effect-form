import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';


const routes = [
  {
      path     : '**',
      component: TableComponent
  }
];

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
  ],
 
})
export class TableModule { }
