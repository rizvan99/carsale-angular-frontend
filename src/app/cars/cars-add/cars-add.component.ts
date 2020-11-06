import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CarService} from '../../shared/services/car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit {

  carsForm = new FormGroup({
    Name: new FormControl(''),
    Brand: new FormControl(''),
    Body: new FormControl(''),
    Price: new FormControl(''),
    Color: new FormControl(''),
    ModelYear: new FormControl('')
  });


  constructor(private carService: CarService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save(){
  const car = this.carsForm.value;
  this.carService.addCar(car).subscribe(() => {
    this.router.navigateByUrl('/cars');
  });

  }

}
