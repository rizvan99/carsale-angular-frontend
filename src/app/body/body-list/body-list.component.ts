import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BodyType} from '../../shared/models/bodytype';
import {BodyService} from '../../shared/services/body.service';

@Component({
  selector: 'app-body-list',
  templateUrl: './body-list.component.html',
  styleUrls: ['./body-list.component.css']
})
export class BodyListComponent implements OnInit {

  bodies$: Observable<BodyType[]>;

  constructor(private bodyService: BodyService) { }

  ngOnInit(): void {
    this.bodies$ = this.bodyService.getBodies();
  }

}
