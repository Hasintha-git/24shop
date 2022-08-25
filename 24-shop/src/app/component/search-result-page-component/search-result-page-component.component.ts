import {Component, OnInit} from '@angular/core';
import {ItemServiceService} from 'src/app/services/items/item-service.service';
import algoliasearch from 'algoliasearch/lite';
import { Router } from '@angular/router';

const searchClient = algoliasearch(
  'UBCRDOM8JO',
  '77916a141ba74163e44aa2f1f6023d9f'
);

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


  searchResult: any;

  config = {
    indexName: '24shop_items',
    searchClient
  };

  showResults=false;

  constructor(private itemService: ItemServiceService, private router: Router) {
    this.search=sessionStorage.getItem('search')
  }

  searched(name:any) {
    console.log(name+"><><><")
      sessionStorage.setItem('buyItem',name)
      this.router.navigate(['/order'])
  }
 
  onSearch(q:any){
    if(q.length){
      console.log(true);
      
      this.showResults=true;
    }else {
      this.showResults=false
    }
  }
  ngOnInit(): void {
    // this.loadItems()
    

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
