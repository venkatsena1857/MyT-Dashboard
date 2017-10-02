import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';

import { ToolsComponent } from './tools.component';
import { ToolsRoutes } from './tools.routing'


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ToolsRoutes),
        FormsModule,
        MdModule
    ],
    declarations: [ToolsComponent]
})

export class ToolsModule {}
