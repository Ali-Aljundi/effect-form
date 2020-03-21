import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseSidebarModule } from '@fuse/components';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { ProjectDashboardComponent } from 'app/main/sample/project.component';

import { AngularResizedEventModule } from 'angular-resize-event';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome/'
const routes: Routes = [
    {
        path     : '**',
        component: ProjectDashboardComponent,
    }
];

@NgModule({
    declarations: [
        ProjectDashboardComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        ToastModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,

        AngularResizedEventModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseWidgetModule,
        RouterModule.forChild(routes),
        FontAwesomeModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,

        FuseSharedModule,
    ],
})
export class ProjectDashboardModule
{
}