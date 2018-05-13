import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import {  MaterialModule, MdDatepickerModule, MdNativeDateModule, MdInputModule, MdSelectModule } from '@angular/material';
import {NouisliderModule} from 'ng2-nouislider';
import { ToolsComponent } from './tools.component';
import { ToolsRoutes } from './tools.routing'


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ToolsRoutes),
        FormsModule,
        MdModule,
        MdInputModule,
        MdSelectModule,
        NouisliderModule
    ],
    declarations: [ToolsComponent]
})

export class ToolsModule {}
