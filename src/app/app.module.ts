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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyTIntercptor } from './services/httpInterceptor.service';
import { UnAuthorizedInterceptor } from './services/unauthorizedErrorInterceptor.service';
import { AuthGuardService } from './services/authGuard.service';
import { AuthenticationService } from './services/authentication.service';
import { APIServices } from './services/apiService.service';
import { HttpClientModule } from '@angular/common/http';
import { GlobalServices } from './services/globalServices.service';
import { TableBuilderService } from './services/tableBuilderService.service';
@NgModule({
    imports:      [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        HttpClientModule,
        SidebarModule,
        NavbarModule,
        FooterModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        LoginComponent
    ],
    bootstrap:    [ AppComponent ],
    providers : [{
        provide: HTTP_INTERCEPTORS,
        useClass: MyTIntercptor,
        multi: true
    }, {
        provide: HTTP_INTERCEPTORS,
        useClass: UnAuthorizedInterceptor,
        multi: true
    }, 
        APIServices,
        AuthGuardService,
        AuthenticationService,
        GlobalServices,
        TableBuilderService
        ]
})
export class AppModule { }
