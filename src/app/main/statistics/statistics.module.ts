import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { ClusterdColumnChartComponent } from '../../Component/clusterd-column-chart/clusterd-column-chart.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes  = [
  {
      path     : '**',
      component: StatisticsComponent
  },
];

@NgModule({
  declarations: [
    StatisticsComponent,
    ClusterdColumnChartComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class StatisticsModule { }
