import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CarService} from '../../shared/services/car.service';
import {Router} from '@angular/router';
import {BodyType} from '../../shared/models/bodytype';
import {BodyService} from '../../shared/services/body.service';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {Car} from '../../shared/models/car';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit {

  carsForm = new FormGroup({
    Name: new FormControl(''),
    Brand: new FormControl(''),
    BodyId: new FormControl(''),
    Price: new FormControl(''),
    Color: new FormControl(''),
    ModelYear: new FormControl('')
  });
  bodies: BodyType[];



  constructor(private carService: CarService,
              private router: Router,
              private bodyService: BodyService) {
  }

  ngOnInit(): void {
    this.bodyService.getBodies().subscribe(bods => this.bodies = bods);
  }


  save() {
    const car = this.carsForm.value;
    car.bodyId = this.carsForm.value.bodies;
    this.carService.addCar(car).subscribe(() => {
      this.router.navigateByUrl('/cars');
    });

  }
}
