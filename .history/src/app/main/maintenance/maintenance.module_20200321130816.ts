import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
//import { FuseSharedModule } from '@fuse/shared.module';


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
    CommonModule,
    RouterModule.forChild(routes),

    MatIconModule,
    //FuseSharedModule
  ]
})
export class MaintenanceModule { }
