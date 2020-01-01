import { Component, OnInit } from '@angular/core';
import { Plant } from './plant.model';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  
  selectedPlant: Plant;

  constructor() { }

  ngOnInit() {
  }

}
