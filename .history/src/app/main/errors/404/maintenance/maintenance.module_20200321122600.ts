import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';


const routes = [
  {
      path     : '**',
      component: MaintenanceComponent
  }
];

@NgModule({
  declarations: [
    MaintenanceComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MaintenanceModule { }
