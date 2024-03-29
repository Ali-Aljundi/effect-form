import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';

import { Error404Component } from 'app/main/errors/404/error-404.component';

const routes = [
    {
        path     : 'error-404',
        component: Error404Component
    }
];

@NgModule({
    declarations: [
        Error404Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        FuseSharedModule
    ]
})
export class Error404Module
{
}
