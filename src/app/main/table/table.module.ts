import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClusterdColumnChartComponent } from '../../Component/clusterd-column-chart/clusterd-column-chart.component';

const routes: Routes  = [
  {
      path     : '**',
      component: TableComponent
  },
];

@NgModule({
  declarations: [
    TableComponent,
    ClusterdColumnChartComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxDatatableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
 
})
export class TableModule { }
