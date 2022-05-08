import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beverages-page-component',
  templateUrl: './beverages-page-component.component.html',
  styleUrls: ['./beverages-page-component.component.scss']
})
export class BeveragesPageComponentComponent implements OnInit {
  currentData:Array<any>=[];

  constructor() { 
    this.currentData=[1,2,3,4,5,6,7,8,9];
  }

  ngOnInit(): void {
  }

}
