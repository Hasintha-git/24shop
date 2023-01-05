import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ItemServiceService} from 'src/app/services/items/item-service.service';

@Component({
  selector: 'app-beverages-page-component',
  templateUrl: './beverages-page-component.component.html',
  styleUrls: ['./beverages-page-component.component.scss']
})
export class BeveragesPageComponentComponent implements OnInit {
  currentData:Array<any>=[];
  imgurl:any;
  status:any;
  price:any;
  pageSlice:Array<any>=[];
  count: number;

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
    this.itemService.getItem("Beverages",this.count).then((res)=> {
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
