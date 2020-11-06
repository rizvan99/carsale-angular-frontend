import { Component, OnInit } from '@angular/core';
import {CarService} from '../../shared/services/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../../shared/models/car';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cars-update',
  templateUrl: './cars-update.component.html',
  styleUrls: ['./cars-update.component.css']
})
export class CarsUpdateComponent implements OnInit {
  public id: number;

  carsForm = new FormGroup({
    Name: new FormControl(''),
    Brand: new FormControl(''),
    Body: new FormControl(''),
    Price: new FormControl(''),
    Color: new FormControl(''),
    ModelYear: new FormControl('')
  });



  constructor(private carService: CarService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCarById(this.id).subscribe(carFromApi => {
      this.carsForm.patchValue({
        Name: carFromApi.name,
        Brand: carFromApi.brand,
        Body: carFromApi.body,
        Price: carFromApi.price,
        Color: carFromApi.color,
        ModelYear: carFromApi.modelYear
      });
    });

  }

  save(){
    const car = this.carsForm.value;
    car.id = this.id;
    this.carService.updateCar(car).subscribe(() => {
      this.router.navigateByUrl('/cars');
    });

  }



}
