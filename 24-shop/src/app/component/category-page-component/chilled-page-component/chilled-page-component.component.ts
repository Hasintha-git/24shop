import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { count } from 'console';
import {ItemServiceService} from 'src/app/services/items/item-service.service';

@Component({
  selector: 'app-chilled-page-component',
  templateUrl: './chilled-page-component.component.html',
  styleUrls: ['./chilled-page-component.component.scss']
})
export class ChilledPageComponentComponent implements OnInit {
  currentData:Array<any>=[];
  imgurl:any;
  status:any;
  price:any;
  oldprice:any;
  pageSlice:Array<any>=[];
  count:number;

  constructor(private itemService: ItemServiceService, private route: Router) {
    this.count=25;
    this.loadItems();
  }
  ngOnInit(): void {
  }

  onScroll(){
    this.count = this.count+25;
    this.loadItems();
    console.log("1")
  }
  loadItems() {
    this.itemService.getItem("Chilled",this.count).then((res)=> {
      for (let i = 0; i < res.size; i++) {
        this.pageSlice[i]=res.docs[i].data();
    }

    })
}

orderSet(list:any) {
  sessionStorage.setItem('buyItem',list.title)
  this.route.navigate(['/order'])
}
}
