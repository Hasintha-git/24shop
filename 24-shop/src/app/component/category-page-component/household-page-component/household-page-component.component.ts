import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ItemServiceService } from 'src/app/services/items/item-service.service';

@Component({
  selector: 'app-household-page-component',
  templateUrl: './household-page-component.component.html',
  styleUrls: ['./household-page-component.component.scss']
})
export class HouseholdPageComponentComponent implements OnInit {
  currentData:Array<any>=[];
  imgurl:any;
  status:any;
  price:any;
  oldprice:any;
  pageSlice:Array<any>=[];

  constructor(private itemService:ItemServiceService,private route:Router) { 
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
    
  this.itemService.getItem("household").then((res)=> {
    console.log(res.size,"size");
      
    for (let i = 0; i < res.size; i++) {
      
      this.pageSlice[i]=res.docs[i].data();
      console.log(this.pageSlice[i],"res");
    }
    
  })
}

orderSet(list:any) {
  console.log(list);
  sessionStorage.setItem('buyItem',list.title)
  this.route.navigate(['/order'])
}
}
