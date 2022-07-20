import {Component, OnInit} from '@angular/core';
import {ItemServiceService} from 'src/app/services/items/item-service.service';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);

@Component({
  selector: 'app-search-result-page-component',
  templateUrl: './search-result-page-component.component.html',
  styleUrls: ['./search-result-page-component.component.scss']
})
export class SearchResultPageComponentComponent implements OnInit {
  config = {
    indexName: 'demo_ecommerce',
    searchClient
  };
  
  imgurl:any;
  status:any;
  price:any;
  oldprice:any;
  pageSlice:Array<any>=[];
  search:any;

  showResult=false;


  constructor(private itemService: ItemServiceService) {
    this.search=sessionStorage.getItem('search')
  }

  onSearch(q:any){
    if(q.length){
      console.log(true);
      
      this.showResult=true;
    }else {
      this.showResult=false
    }
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
