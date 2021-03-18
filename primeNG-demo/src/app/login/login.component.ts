import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { APP_ROUTES, COOKIE_NAME } from '../utils/enums';
import { Util } from '../utils/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  public isErrorDialog = false;

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {

  }

  ngOnInit(): void {
  }

  public get isValid(): boolean {
    if (this.username.length && this.password.length) {
      return true;
    }
  }

  public login(): void {
    // TODO: Make Ajax request and validate user
    if (
      this.username === 'admin' &&
      this.password === 'admin'
    ) {
      this.cookieService.set(COOKIE_NAME.SESSION_COOKIE, this.username);
      this.redirectToDashboard();
    } else {
      this.isErrorDialog = true;
    }
  }

  private redirectToDashboard(): void {
    this.router.navigateByUrl(
      Util.getPrefixedRoute(
        APP_ROUTES.DASHBOARD,
        APP_ROUTES.WRAPPER_MODULE_PATH));
  }
}
