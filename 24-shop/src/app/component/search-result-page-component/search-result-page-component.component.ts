import {Component, OnInit} from '@angular/core';
import {ItemServiceService} from 'src/app/services/items/item-service.service';

@Component({
  selector: 'app-search-result-page-component',
  templateUrl: './search-result-page-component.component.html',
  styleUrls: ['./search-result-page-component.component.scss']
})
export class SearchResultPageComponentComponent implements OnInit {

  imgurl:any;
  status:any;
  price:any;
  oldprice:any;
  pageSlice:Array<any>=[];
  search:any;



  constructor(private itemService: ItemServiceService) {
    this.search=sessionStorage.getItem('search')
  }

  ngOnInit(): void {
    this.loadItems()

  }

  loadItems(){

    this.itemService.searchItem(this.search).then((res)=> {
      sessionStorage.removeItem("search")
      for (let i = 0; i < res.size; i++) {

        this.pageSlice[i]=res.docs[i].data();
      }

    })
  }
}
