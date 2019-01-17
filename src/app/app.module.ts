import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './Components/landing/landing.component';

import { routing } from './Routes/app.routes';
import { LoginComponent } from './Components/login/login.component';
import { HomeNavbarComponent } from './home/home-navbar/home-navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HomeNavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
