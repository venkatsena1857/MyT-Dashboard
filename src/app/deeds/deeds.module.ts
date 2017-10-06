import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';

import { DeedsComponent } from './deeds.component';
import { DeedsRoutes } from './deeds.routing';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DeedsRoutes),
        FormsModule,
        MdModule
    ],
    declarations: [DeedsComponent]
})

export class DeedsModule {}
