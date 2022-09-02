import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ItemServiceService} from 'src/app/services/items/item-service.service';

@Component({
  selector: 'app-frozen-food-page-component',
  templateUrl: './frozen-food-page-component.component.html',
  styleUrls: ['./frozen-food-page-component.component.scss']
})
export class FrozenFoodPageComponentComponent implements OnInit {
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
    this.itemService.getItem("Frozen Food").then((res)=> {
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
