import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
const routes: Routes  = [
  {
      path     : '**',
      component: AccordionComponent
  },
];

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AccordionModule
  ]
})
export class accordionModule { }
