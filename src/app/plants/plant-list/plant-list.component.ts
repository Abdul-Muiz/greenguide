import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Plant } from '../plant.model';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  @Output() plantWasSelected = new EventEmitter<Plant>();
  plants: Plant[] = [
    new Plant('A Test Plant', 'Soil type:dry \n weather conditions: sunny','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Plant('Another Test Plant', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onPlantSelected(plant: Plant) {
   this.plantWasSelected.emit(plant);
  }

}
