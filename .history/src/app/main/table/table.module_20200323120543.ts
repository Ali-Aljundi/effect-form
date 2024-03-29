import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes  = [
  {
      path     : '**',
      component: TableComponent
  },
];

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxDatatableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
 
})
export class TableModule { }
