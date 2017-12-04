import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

interface Token {
  token: string;
}

@Injectable()
export class AuthService {
  private token: Token;
  constructor(private http: HttpClient) {}
  registerUser(registrationData) {
    this.http.post('http://localhost:3000/register', registrationData).subscribe(res => {
    });
  }
  loginUser(loginData) {
    this.http.post<Token>('http://localhost:3000/login', loginData).subscribe(res => {
      this.token = res;
      localStorage.setItem('token', this.token.token);
      console.log(res);
    });
  }
}
