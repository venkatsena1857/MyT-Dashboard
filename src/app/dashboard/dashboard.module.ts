import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
//import {BrowserModule} from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import {HttpClientModule} from '@angular/common/http';
import { ChartModule }   from 'angular2-highcharts'; 
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
//import {TestParetoComponent} from './testpareto'

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
       // ChartModule.forRoot(require('highcharts')),
        FormsModule,
        MdModule,
        ChartModule,
        HttpClientModule
  //      TestParetoComponent
  //      BrowserModule
    ],
    declarations: [DashboardComponent],
    providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ],
})

export class DashboardModule {}
