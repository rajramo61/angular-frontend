import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatListModule} from '@angular/material';

import { AppComponent } from './app.component';
import {ApiService} from './api.service';
import {MessagesComponent} from './messages.component';
import {RegisterComponent} from './register.component';
import {LoginComponent} from './login.component';
import {AuthService} from './auth.service';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile.component';


const routes: Routes = [
  // { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserComponent },
  { path: 'profile/:id', component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
