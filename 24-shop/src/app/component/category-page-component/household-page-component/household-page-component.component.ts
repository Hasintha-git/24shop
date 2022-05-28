import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-household-page-component',
  templateUrl: './household-page-component.component.html',
  styleUrls: ['./household-page-component.component.scss']
})
export class HouseholdPageComponentComponent implements OnInit {
  public currentData:any;
  imgurl:any;
  status:any;
  price:any;
  oldprice:any;
  public pageSlice:any ;

  constructor() { 
    this.currentData=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    this.price='94';
    this.oldprice='48';
    this.imgurl="../../assets/categoryIcons/vegi.png"
    this.status="New";
    this.pageSlice=this.currentData.slice(0,10)
  }
  ngOnInit(): void {
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    
    const startIndex=event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex>this.currentData.length) {
      endIndex = this.currentData.length;
    }
    this.pageSlice =this.currentData.slice(startIndex,endIndex)
  }

}