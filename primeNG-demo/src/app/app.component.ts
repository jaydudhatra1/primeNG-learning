import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from './utils/enums';
import { Util } from './utils/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeNG-demo';

  constructor(
    private router: Router
  ) {}

  public get isLoginPage(): boolean {
    return this.router.url === Util.getPrefixedRoute(APP_ROUTES.LOGIN) ? true : false;
  }
}
