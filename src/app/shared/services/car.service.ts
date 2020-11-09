import { Injectable } from '@angular/core';
import {Car} from '../models/car';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class CarService {


  apiUrl = 'https://localhost:44393/api/cars';

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  getCars(): Observable<Car[]>
  {
    // authorization
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    // getting cars from api
    return this.http.get<Car[]>(this.apiUrl, httpOptions);
  }

  addCar(car: Car): Observable<Car>
  {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Car>(this.apiUrl, car, httpOptions);
  }

  getCarById(id: number): Observable<Car> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Car>(this.apiUrl + '/' + id, httpOptions);
  }

  updateCar(car: Car): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.put<Car>(this.apiUrl + '/' + car.id, car, httpOptions);
  }

  deleteCar(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.delete(this.apiUrl + '/' + id, httpOptions);
  }
}
