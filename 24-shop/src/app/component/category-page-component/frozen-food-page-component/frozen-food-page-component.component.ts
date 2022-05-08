import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frozen-food-page-component',
  templateUrl: './frozen-food-page-component.component.html',
  styleUrls: ['./frozen-food-page-component.component.scss']
})
export class FrozenFoodPageComponentComponent implements OnInit {
  currentData:Array<any>=[];

  constructor() { 
    this.currentData=[10,20];
  }
  ngOnInit(): void {
  }

}
