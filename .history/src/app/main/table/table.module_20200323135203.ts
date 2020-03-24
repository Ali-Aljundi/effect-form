import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    MatRadioButton,
    MatIconModule,
    MatFormFieldModule
  ],
 
})
export class TableModule { }
