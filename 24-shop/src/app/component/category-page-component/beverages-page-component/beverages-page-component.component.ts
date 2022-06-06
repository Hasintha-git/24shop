import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ItemServiceService } from 'src/app/services/items/item-service.service';

@Component({
  selector: 'app-beverages-page-component',
  templateUrl: './beverages-page-component.component.html',
  styleUrls: ['./beverages-page-component.component.scss']
})
export class BeveragesPageComponentComponent implements OnInit {
  public currentData:any;
  imgurl:any;
  status:any;
  price:any;
  oldprice:any;
  pageSlice:Array<any>=[];

  constructor(private itemService:ItemServiceService) { 
    this.oldprice='48';
    this.loadItems()

    // this.pageSlice=this.currentData.slice(0,10)
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

  loadItems() {
      console.log("load");
      
    this.itemService.getItem("Beverages").then((res)=> {
      console.log(res.size,"size");
        
      for (let i = 0; i < res.size; i++) {
        
        this.pageSlice[i]=res.docs[i].data();
        console.log(this.pageSlice[i],"res");
      }
      
    })
  }

}
