import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    return this.router.url === '/login' ? true : false;
  }
}
