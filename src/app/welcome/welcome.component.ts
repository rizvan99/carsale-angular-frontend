import { Component, OnInit } from '@angular/core';
import {CarService} from '../shared/services/car.service';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title = 'Welcome to Carsale Customs!';
  username: string;
  constructor(private carService: CarService,
              private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit(): void {
  }

}
