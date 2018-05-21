import { Routes, CanActivate } from '@angular/router';
import { AuthGuardService as authGuard} from './services/authGuard.service'
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { EducationComponent } from './education/education.component';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
    {
      path: '',
      component : LoginComponent
    }, {
      path: 'user',
      component: AdminLayoutComponent,
      canActivate: [authGuard],
      children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },{
        path: 'education',
        loadChildren: './education/education.module#EducationModule'
    },{
        path: 'workex',
        loadChildren: './workex/workex.module#WorkexModule'
    }, {
        path: 'deeds',
        loadChildren: './deeds/deeds.module#DeedsModule'
    }, {
        path: 'tools',
        loadChildren: './tools/tools.module#ToolsModule'
    }, {
        path: 'skills',
        loadChildren: './skills/skills.module#SkillsModule'
    }
  ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
