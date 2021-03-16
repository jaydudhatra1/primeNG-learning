import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public get isValid(): boolean {
    if (this.username.length && this.password.length) {
      return true;
    }
  }

  public login(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
