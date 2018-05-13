import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { AppRoutes } from './app.routing';
import { LoginComponent } from './login/login.component';
//import { SkillsComponent } from './skills/skills.component';
//import { ToolsComponent } from './tools/tools.component';
//import { DeedsComponent } from './deeds/deeds.component';
//import { WorkexComponent } from './workex/workex.component';
//import { EducationComponent } from './education/education.component';

@NgModule({
    imports:      [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
       LoginComponent,
       // SkillsComponent,
       // ToolsComponent,
       // DeedsComponent,
       // WorkexComponent,
       // EducationComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
