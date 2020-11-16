import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BodyType} from '../models/bodytype';

@Injectable({
  providedIn: 'root'
})
export class BodyService {

  bodyApiUrl = 'https://localhost:44393/api/bodytypes';

  constructor(private http: HttpClient) { }

  getBodies(): Observable<BodyType[]> {
    return this.http.get<BodyType[]>(this.bodyApiUrl);
  }

}
