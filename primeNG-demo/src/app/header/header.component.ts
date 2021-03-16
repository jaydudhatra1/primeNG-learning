import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        url: '#'
      },
      {
        label: 'Analytics',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/analytics'
      },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-apple',
        routerLink: 'product-listing'
      }
    ];
  }

  public logout(): void {
    this.router.navigateByUrl('/login');
  }

}
