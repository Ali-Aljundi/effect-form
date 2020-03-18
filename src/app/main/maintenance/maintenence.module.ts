import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { MaintenanceComponent } from 'app/main/maintenance/maintenance.component';
import { MatIconModule } from '@angular/material/icon';
const routes = [
    {
        path     : '**',
        component: MaintenanceComponent
    }
];

@NgModule({
    declarations: [
        MaintenanceComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatIconModule,
        FuseSharedModule
    ]
})
export class MaintenanceModule
{
}
