import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomsys',
  templateUrl: './recomsys.component.html',
  styleUrls: ['./recomsys.component.css']
})
export class RecomsysComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
   friends = [{name:'John', phone:'555-1276'},
        {name:'Mary', phone:'800-BIG-MARY'},
        {name:'Mike', phone:'555-4321'},
        {name:'Adam', phone:'555-5678'},
        {name:'Julie', phone:'555-8765'},
        {name:'Juliette', phone:'555-5678'}];
}
