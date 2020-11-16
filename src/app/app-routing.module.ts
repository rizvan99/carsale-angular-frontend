import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {CarsListComponent} from './cars/cars-list/cars-list.component';
import {CarsDetailComponent} from './cars/cars-detail/cars-detail.component';
import {CarsAddComponent} from './cars/cars-add/cars-add.component';
import {CarsUpdateComponent} from './cars/cars-update/cars-update.component';
import {LoginComponent} from './login/login/login.component';
import {AuthGuard} from './authentication/auth.guard';
import {BodyListComponent} from './body/body-list/body-list.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent, canActivate: [AuthGuard]},
  { path: 'cars', component: CarsListComponent, canActivate: [AuthGuard]},
  { path: 'cars/:id', component: CarsDetailComponent, canActivate: [AuthGuard]},
  { path: 'cars-add', component: CarsAddComponent, canActivate: [AuthGuard]},
  { path: 'cars-update/:id', component: CarsUpdateComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'bodies', component: BodyListComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
