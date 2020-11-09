import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { CarsDetailComponent } from './cars/cars-detail/cars-detail.component';
import { CarsAddComponent } from './cars/cars-add/cars-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CarsUpdateComponent } from './cars/cars-update/cars-update.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';

import {AuthenticationService} from './shared/services/authentication.service';
import {CarService} from './shared/services/car.service';
import {AuthGuard} from './authentication/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    NavbarComponent,
    WelcomeComponent,
    CarsDetailComponent,
    CarsAddComponent,
    CarsUpdateComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
