import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';

import { EducationComponent } from './education.component';
import { EducationRoutes } from './education.routing'
import {  MaterialModule, MdDatepickerModule, MdNativeDateModule, MdInputModule, MdSelectModule } from '@angular/material';
import { MyTMandatoryDirective } from '../directives/mandatory.directive';
import { MyTEmailDirective } from '../directives/email.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(EducationRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdInputModule,
        MdSelectModule
    ],
    declarations: [EducationComponent, MyTMandatoryDirective, MyTEmailDirective]
})

export class EducationModule {}
