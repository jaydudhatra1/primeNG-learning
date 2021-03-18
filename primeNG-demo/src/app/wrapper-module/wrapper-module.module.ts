import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth/auth.guard';
import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from '../utils/enums';

const routes: Routes = [
  {
    path: APP_ROUTES.DASHBOARD,
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ButtonModule,
  ],
  providers: [CookieService, AuthGuard]
})
export class WrapperModuleModule { }
