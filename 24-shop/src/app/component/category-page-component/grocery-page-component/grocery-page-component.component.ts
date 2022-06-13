import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ItemServiceService} from 'src/app/services/items/item-service.service';

@Component({
  selector: 'app-grocery-page-component',
  templateUrl: './grocery-page-component.component.html',
  styleUrls: ['./grocery-page-component.component.scss']
})
export class GroceryPageComponentComponent implements OnInit {
  currentData:Array<any>=[];
  imgurl:any;
  status:any;
  price:any;
  pageSlice:Array<any>=[];

  constructor(private itemService: ItemServiceService, private route: Router) {
    this.loadItems()
  }
  ngOnInit(): void {
  }

  loadItems() {
    console.log("load");

    this.itemService.getItem("Grocery").then((res)=> {
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
