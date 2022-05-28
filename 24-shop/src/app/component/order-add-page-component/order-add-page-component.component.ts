import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-add-page-component',
  templateUrl: './order-add-page-component.component.html',
  styleUrls: ['./order-add-page-component.component.scss']
})
export class OrderAddPageComponentComponent implements OnInit {
  qtyCount:number;
  price:number;
  temPrice:number;
  description:string;
  title:string;
  itemNo:string;
  
  constructor() {
    this.qtyCount=1;
    this.price=100;
    this.temPrice=this.price;
    this.price=this.temPrice*this.qtyCount;
    this.description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem odit ipsa minus quibusdam animi amet consectetur voluptas! Accusamus odit eaque explicabo vel fugiat nemo sequi dolor. Delectus deserunt similique accusamus.";
    this.title="chilli crushted 100g";
    this.itemNo="RF0045";
   }

  ngOnInit(): void {
  }

  plus(){
    this.qtyCount=this.qtyCount+1;
    this.price=this.temPrice*this.qtyCount;
  }

  min(){
    if (this.qtyCount>1) {
    this.qtyCount=this.qtyCount-1
    this.price=this.temPrice*this.qtyCount;
    }
  }

}
