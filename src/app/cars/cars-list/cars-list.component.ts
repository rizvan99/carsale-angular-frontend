import { Component, OnInit } from '@angular/core';
import {Car} from '../../shared/models/car';
import {CarService} from '../../shared/services/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.refresh();

  }

  refresh()
  {
    this.carService.getCars().subscribe(listOfCars => {
      this.cars = listOfCars;
    });
  }

  delete(Id: number) {
    this.carService.deleteCar(Id).subscribe();
    this.refresh();
    }

}
