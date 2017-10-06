import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';

import { DeedsComponent } from './deeds.component';
import { DeedsRoutes } from './deeds.routing';

import { CertificatesComponent } from './certificates/certificates.component';
import { TakingClassesComponent } from './taking-classes/taking-classes.component';
import { ConductingClassesComponent } from './conducting-classes/conducting-classes.component';
import { MentoringComponent } from './mentoring/mentoring.component';
import { WritingComponent } from './writing/writing.component';
import { ConfrencesComponent } from './confrences/confrences.component';
import { AwardsComponent } from './awards/awards.component';
import { RecognizedExpertieseComponent } from './recognized-expertiese/recognized-expertiese.component';
import { PatentsComponent } from './patents/patents.component';
import { LeisureComponent } from './leisure/leisure.component';
import { LanguagesComponent } from './languages/languages.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DeedsRoutes),
        FormsModule,
        MdModule
    ],
    declarations: [DeedsComponent, CertificatesComponent, TakingClassesComponent, ConductingClassesComponent, MentoringComponent, WritingComponent, ConfrencesComponent, AwardsComponent, RecognizedExpertieseComponent, PatentsComponent, LeisureComponent, LanguagesComponent]
})

export class DeedsModule {}
