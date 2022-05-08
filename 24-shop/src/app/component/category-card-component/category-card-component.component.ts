import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card-component',
  templateUrl: './category-card-component.component.html',
  styleUrls: ['./category-card-component.component.scss']
})
export class CategoryCardComponentComponent implements OnInit {
  currentData:Array<any>=[];
  imgurl:any;

  constructor() { 
    this.currentData=[1,2,3,4,5,6,7,8,9,10];
    this.imgurl="https://www.pngmart.com/files/3/Vegetable-PNG-Photos.png"
  }
  ngOnInit(): void {
  }

}
