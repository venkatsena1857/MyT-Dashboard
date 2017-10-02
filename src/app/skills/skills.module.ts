import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';

import { SkillsComponent } from './skills.component';
import { SkillsRoutes } from './skills.routing'


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SkillsRoutes),
        FormsModule,
        MdModule
    ],
    declarations: [SkillsComponent]
})

export class SkillsModule {}
