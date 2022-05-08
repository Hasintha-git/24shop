import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-page-component',
  templateUrl: './grocery-page-component.component.html',
  styleUrls: ['./grocery-page-component.component.scss']
})
export class GroceryPageComponentComponent implements OnInit {
  currentData:Array<any>=[];
  imgurl:any;
  status:any;
  price:any;
  oldprice:any;

  constructor() { 
    this.currentData=[1,2,3,4,5,6,7,8,9,10];
    this.price='44';
    this.oldprice='48';
    this.imgurl="https://www.pngmart.com/files/3/Vegetable-PNG-Photos.png"
    this.status="New"
  }
  ngOnInit(): void {
  }

}
