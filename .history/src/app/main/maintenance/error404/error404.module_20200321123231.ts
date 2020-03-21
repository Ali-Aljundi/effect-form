import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from 'app/main/maintenance/error404/error404.component';


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
    CommonModule
  ]
})
export class Error404Module { }
