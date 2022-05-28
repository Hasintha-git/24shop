import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-cart-component',
  templateUrl: './search-cart-component.component.html',
  styleUrls: ['./search-cart-component.component.scss']
})
export class SearchCartComponentComponent implements OnInit {
  public currentData:any;
  imgurl:any;
  status:any;
  price:any;
  oldprice:any;
  public pageSlice:any ;

  constructor() { 
    this.currentData=[1,2,3,4,5,6,7,8];
    this.price='94';
    this.oldprice='48';
    this.imgurl="../../assets/categoryIcons/vegi.png"
    this.status="New";
    this.pageSlice=this.currentData.slice(0,10)
  }
  ngOnInit(): void {
  }


}
