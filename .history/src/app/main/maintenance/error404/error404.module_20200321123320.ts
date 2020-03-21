import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from 'app/main/maintenance/error404/error404.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FuseSharedModule } from '@fuse/shared.module';


const routes = [
  {
      path     : '**',
      component: Error404Component
  }
];

@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    RouterModule.forChild(routes),
        MatIconModule,
        FuseSharedModule
  ]
})
export class Error404Module { }
