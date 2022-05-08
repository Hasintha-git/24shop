import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chilled-page-component',
  templateUrl: './chilled-page-component.component.html',
  styleUrls: ['./chilled-page-component.component.scss']
})
export class ChilledPageComponentComponent implements OnInit {
  currentData:Array<any>=[];

  constructor() { 
    this.currentData=[10,20];
  }
  ngOnInit(): void {
  }

}
