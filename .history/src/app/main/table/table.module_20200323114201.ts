import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

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
    ButtonModule
  ],
 
})
export class TableModule { }
