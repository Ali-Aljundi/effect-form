import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FuseModule } from '../@fuse/fuse.module';
import { FuseSharedModule } from '../@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '../@fuse/components';

import { fuseConfig } from './fuse-config';
import { FakeDbService } from './fake-db/fake-db.service';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';
import { TableModule } from './main/table/table.module';



const appRoutes: Routes = [

    {
        path      : 'table',
        loadChildren : './main/table/table.module#TableModule'
    },
    {
        path      : 'form',
        loadChildren : './main/sample/project.module#ProjectDashboardModule'
    },
   
    {
        path      : 'dashboard',
        loadChildren : './main/resizing/resizing.module#ResizingModule'
    },
    {
        path      : 'accordion',
        loadChildren : './main/accordion/accordion.module#AccordionModule'
    },
    {
        path: 'maintenance',
        loadChildren: './main/maintenance/maintenance.module#MaintenanceModule' 
    },
    {
        path: 'errors',
        loadChildren: './main/errors/error404/error404.module#Error404Module' 
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        redirectTo: '/login',
       pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/errors'
    }

];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        LoginModule,
        TranslateModule.forRoot(),
        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        TableModule,
        // App modules
        LayoutModule,
        
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
