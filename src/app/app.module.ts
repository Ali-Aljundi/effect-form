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


const appRoutes: Routes = [
    {
        path      : 'form',
        loadChildren :'./main/sample/project.module#ProjectDashboardModule'
    },
   
    {
        path      : 'dashboard',
        loadChildren :'./main/resizing/resizing.module#ResizingModule'
    },
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
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
