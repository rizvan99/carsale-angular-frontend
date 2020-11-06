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

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CarService {


  apiUrl = 'https://localhost:44393/api/cars';

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  getCars(): Observable<Car[]>
  {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Car[]>(this.apiUrl);
  }

  addCar(car: Car): Observable<Car>
  {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Car>(this.apiUrl, car);
  }

  getCarById(id: number): Observable<Car> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Car>(this.apiUrl + '/' + id);
  }

  updateCar(car: Car): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.put<Car>(this.apiUrl + '/' + car.id, car);
  }

  deleteCar(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
