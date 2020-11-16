import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-body-add',
  templateUrl: './body-add.component.html',
  styleUrls: ['./body-add.component.css']
})
export class BodyAddComponent implements OnInit {

  type = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
