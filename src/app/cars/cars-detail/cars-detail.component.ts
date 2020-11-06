import { Component, OnInit } from '@angular/core';
import {Car} from '../../shared/models/car';
import {CarService} from '../../shared/services/car.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {
  car: Car;
  constructor(
    private carService: CarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCarById(id).subscribe(carFromApi => {
      this.car = carFromApi;
    });

  }

}
