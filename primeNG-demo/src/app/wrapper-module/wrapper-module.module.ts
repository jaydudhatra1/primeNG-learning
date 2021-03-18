import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth/auth.guard';
import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from '../utils/enums';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

const routes: Routes = [
  {
    path: APP_ROUTES.DASHBOARD,
    component: DashboardComponent
  },
  {
    path: APP_ROUTES.ANALYTICTS,
    component: AnalyticsComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ButtonModule,
    ChartModule,
    TableModule,
  ],
  providers: [CookieService, AuthGuard]
})
export class WrapperModuleModule { }
