import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
//import { VariableRadiosPieChartComponent } from '../../Component/variable-radios-pie-chart/variable-radios-pie-chart.component';
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
   // VariableRadiosPieChartComponent
    //ClusterdColumnChartComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class StatisticsModule { }
