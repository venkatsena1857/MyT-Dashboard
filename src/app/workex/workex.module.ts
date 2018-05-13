import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MaterialModule, MdDatepickerModule, MdNativeDateModule, MdInputModule, MdSelectModule } from '@angular/material';
import { MdModule } from '../md/md.module';
import { WorkexComponent } from './workex.component';
import { WorkexRoutes } from './workex.routing'
import { NouisliderModule } from 'ng2-nouislider';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(WorkexRoutes),
        FormsModule,
    	ReactiveFormsModule,
    	MaterialModule,
    	MdDatepickerModule,
    	MdInputModule,
    	MdNativeDateModule,
    	MdSelectModule,
    	NouisliderModule
    	],
    declarations: [WorkexComponent]
})

export class WorkexModule {}
