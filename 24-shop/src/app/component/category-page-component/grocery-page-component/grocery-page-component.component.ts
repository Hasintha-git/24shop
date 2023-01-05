import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ItemServiceService } from 'src/app/services/items/item-service.service';

@Component({
  selector: 'app-grocery-page-component',
  templateUrl: './grocery-page-component.component.html',
  styleUrls: ['./grocery-page-component.component.scss'],
  
})
export class GroceryPageComponentComponent implements OnInit {
  currentData:Array<any>=[];
  imgurl:any;
  status:any;
  price:any;
  pageSlice:Array<any>=[];
  count: number;
  isVisible: boolean;

  constructor(private itemService: ItemServiceService, private route: Router) {
    this.count=25;
    this.isVisible = false;
    this.loadItems();

  }
  ngOnInit(): void {
  }

  onScroll(){
    this.count = this.count+25;
    this.loadItems()
    console.log("1")
  }
  loadItems() {
    this.isVisible = true;
    this.itemService.getItem("Grocery",this.count).then((res)=> {
      for (let i = 0; i < res.size; i++) {

        this.pageSlice[i]=res.docs[i].data();
    }
    this.isVisible = false;
    })
}

orderSet(list:any) {
  sessionStorage.setItem('buyItem',list.title)
  this.route.navigate(['/order'])
}
}
