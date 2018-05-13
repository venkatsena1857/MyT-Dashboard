import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';


//import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';

@NgModule({
    imports: [
        CommonModule,
     	RouterModule.forChild(LoginRoutes),
        FormsModule,
        MdModule
    ],
   // declarations: [LoginComponent]
})

export class LoginModule {}