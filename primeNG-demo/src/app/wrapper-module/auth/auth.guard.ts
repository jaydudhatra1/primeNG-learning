import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Util } from 'src/app/utils/util';
import { APP_ROUTES, COOKIE_NAME } from '../../utils/enums';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isCookiePresent = this.cookieService.check(COOKIE_NAME.SESSION_COOKIE);

    if (!isCookiePresent && state.url !== Util.getPrefixedRoute(APP_ROUTES.LOGIN)) {
      this.router.navigateByUrl(APP_ROUTES.LOGIN);
    } else if (isCookiePresent && state.url === Util.getPrefixedRoute(APP_ROUTES.LOGIN)) {
      this.router.navigateByUrl(
        Util.getPrefixedRoute(
          APP_ROUTES.DASHBOARD,
          APP_ROUTES.WRAPPER_MODULE_PATH));
    }

    return true;
  }
}
