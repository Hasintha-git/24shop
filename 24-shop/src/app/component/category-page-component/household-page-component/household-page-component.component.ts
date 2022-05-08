import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-household-page-component',
  templateUrl: './household-page-component.component.html',
  styleUrls: ['./household-page-component.component.scss']
})
export class HouseholdPageComponentComponent implements OnInit {
  currentData:Array<any>=[];

  constructor() { 
    this.currentData=[10,20];
  }
  ngOnInit(): void {
  }

}
