import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent } from './Components/landing/landing.component';

import { routing } from '../routes/app.routes';
import { LoginComponent } from './Components/login/login.component';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

import { AuthService } from './Services/auth/auth.service' 

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    ChangepasswordComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    JwtHelper,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
