import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Plant } from '../../plant.model';

@Component({
  selector: 'app-plant-item',
  templateUrl: './plant-item.component.html',
  styleUrls: ['./plant-item.component.css']
})
export class PlantItemComponent implements OnInit {
  @Input() plant: Plant;
  @Output() plantSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.plantSelected.emit();
  }

}
