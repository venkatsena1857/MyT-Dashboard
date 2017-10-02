import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';

import { WorkexComponent } from './workex.component';
import { WorkexRoutes } from './workex.routing'


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(WorkexRoutes),
        FormsModule,
        MdModule
    ],
    declarations: [WorkexComponent]
})

export class WorkexModule {}
