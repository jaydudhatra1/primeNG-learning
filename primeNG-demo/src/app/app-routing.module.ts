import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './wrapper-module/auth/auth.guard';
import { DashboardComponent } from './wrapper-module/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { APP_ROUTES } from './utils/enums';
import { AppComponent } from './app.component';
import { WrapperModuleModule } from './wrapper-module/wrapper-module.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: APP_ROUTES.LOGIN
      },
      {
        path: APP_ROUTES.LOGIN,
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: APP_ROUTES.WRAPPER_MODULE_PATH,
        loadChildren: () => import('./wrapper-module/wrapper-module.module').then(m => m.WrapperModuleModule),
        canActivate: [AuthGuard],
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
