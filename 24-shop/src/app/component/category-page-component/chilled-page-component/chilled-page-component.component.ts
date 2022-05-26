import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-chilled-page-component',
  templateUrl: './chilled-page-component.component.html',
  styleUrls: ['./chilled-page-component.component.scss']
})
export class ChilledPageComponentComponent implements OnInit {
  public currentData:any;
  imgurl:any;
  status:any;
  price:any;
  oldprice:any;
  public pageSlice:any ;

  constructor() { 
    this.currentData=["hi","hello","how","are","you"];
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
