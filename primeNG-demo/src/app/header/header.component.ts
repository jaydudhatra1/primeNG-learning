import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MenuItem } from 'primeng/api';
import { APP_ROUTES, COOKIE_NAME } from '../utils/enums';
import { Util } from '../utils/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuItems: MenuItem[];
  public menuItemsLoginPage: MenuItem[];

  constructor(
    private router: Router,
    private cookieService: CookieService,
    @Inject(DOCUMENT) private document
  ) { }

  ngOnInit(): void {
    this.menuItems = [
      // TODO: Add home page with sale information in carousel
      // {
      //   label: 'Home',
      //   icon: 'pi pi-fw pi-home',
      //   url: '#'
      // },
      {
        label: 'Analytics',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/app/analytics'
      },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-apple',
        routerLink: 'app/dashboard'
      },
      {
        label: 'Theme',
        icon: 'pi pi-fw pi-palette',
        items: [
          { label: 'nova-alt', command: this.changeTheme.bind(this, 'nova-alt', 'light') },
          { label: 'bootstrap4-dark-blue', command: this.changeTheme.bind(this, 'bootstrap4-dark-blue', 'dark') },
          { label: 'mdc-light-deeppurple', command: this.changeTheme.bind(this, 'mdc-light-deeppurple', 'light') },
          { label: 'rhea', command: this.changeTheme.bind(this, 'rhea', 'light') },
          { label: 'vela-green', command: this.changeTheme.bind(this, 'vela-green', 'light') },
          { label: 'md-dark-indigo', command: this.changeTheme.bind(this, 'md-dark-indigo', 'dark') },
        ]
      }
    ];

    this.menuItemsLoginPage = [
      {
        label: 'Theme',
        icon: 'pi pi-fw pi-palette',
        items: [
          { label: 'nova-alt', command: this.changeTheme.bind(this, 'nova-alt', 'light') },
          { label: 'bootstrap4-dark-blue', command: this.changeTheme.bind(this, 'bootstrap4-dark-blue', 'dark') },
          { label: 'mdc-light-deeppurple', command: this.changeTheme.bind(this, 'mdc-light-deeppurple', 'light') },
          { label: 'rhea', command: this.changeTheme.bind(this, 'rhea', 'light') },
          { label: 'vela-green', command: this.changeTheme.bind(this, 'vela-green', 'light') },
          { label: 'md-dark-indigo', command: this.changeTheme.bind(this, 'md-dark-indigo', 'dark') },
        ]
      }
    ];
  }

  public get isLoginPage(): boolean {
    return this.router.url === Util.getPrefixedRoute(APP_ROUTES.LOGIN) ? true : false;
  }

  public logout(): void {
    this.cookieService.delete(COOKIE_NAME.SESSION_COOKIE);
    this.router.navigateByUrl(APP_ROUTES.LOGIN);
  }

  private changeTheme(themeName: string, bodyClass: string): void {
    const themeCSSPath: string = '/assets/themes/' + themeName + '/theme.css';
    this.document.getElementById('theme').setAttribute('href', themeCSSPath);
    this.document.body.className = bodyClass;
  }
}
