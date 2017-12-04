import {Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-register',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>
          <h4>Login User</h4>
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form>
          <mat-input-container>
            <input matInput [(ngModel)]="loginData.email" placeholder="email" name="email" type="email">
          </mat-input-container>
          <mat-input-container>
            <input matInput [(ngModel)]="loginData.password" placeholder="password" name="password" type="password">
          </mat-input-container>
          <button (click)="post()" mat-raised-button color="primary">Login</button>
        </form>
      </mat-card-content>
    </mat-card>
  `
})
export class LoginComponent {
  loginData = {};
  constructor(private authService: AuthService) {}
  post() {
    this.authService.loginUser(this.loginData);
  }
}
