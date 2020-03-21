import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizingComponent } from './resizing.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '../../../@fuse/shared.module';
import { FuseSidebarModule } from '../../../@fuse/components';
import { FuseWidgetModule } from '../../../@fuse/components/widget/widget.module';
import { WidgetComponent } from './widget/widget.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { FirstChartComponent } from './am-chart/first-chart/first-chart.component';
import { TagCloudComponent } from './am-chart/Tag-cloud/tag-cloud.component';

const routes: Routes  = [
  {
      path     : '**',
      component: ResizingComponent
  },
];

@NgModule({
  declarations: [ResizingComponent, WidgetComponent, FirstChartComponent, TagCloudComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule, 
    DashboardLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    NgxChartsModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseWidgetModule,
    MatExpansionModule,
    AccordionModule
  ]
})
export class ResizingModule { }
