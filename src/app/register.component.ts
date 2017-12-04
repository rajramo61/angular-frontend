import {Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  registerData = {};
  constructor(private authService: AuthService) {}

  post() {
    // const data = {email: this.loginData.email, password: this.loginData.password};
    this.authService.registerUser(this.registerData);
    console.log('Form Data = %o', this.registerData);
  }
}
