import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class ApiService {
  messages: any;
  users: any;
  constructor(private http: HttpClient) {}

  getMessages() {
    this.http.get('http://localhost:3000/posts').subscribe(res => {
      console.log('Response : %o', res);
      this.messages = res;
    });
  }

  getUsers() {
    this.http.get('http://localhost:3000/users').subscribe(res => {
      console.log('Response : %o', res);
      this.users = res;
    });
  }

  getProfile(id: string) {
    return this.http.get('http://localhost:3000/profile/' + id);
  }
}
