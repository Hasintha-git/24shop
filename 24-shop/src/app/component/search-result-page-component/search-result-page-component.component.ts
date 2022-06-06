import { Component,  Input,  OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/services/items/item-service.service';
import { SearchBarComponentComponent } from '../search-bar-component/search-bar-component.component';


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
  // search: any;
  search:any;

  constructor(private itemService:ItemServiceService ) { 
    this.search=sessionStorage.getItem('search')
    
    
    this.loadItems()
  }
  ngOnInit(): void {
  }

  loadItems(){
    console.log("load",this.search);
      
    this.itemService.searchItem(this.search).then((res)=> {
      console.log(res.size,"size");
      sessionStorage.removeItem("search")
      for (let i = 0; i < res.size; i++) {
        
        this.pageSlice[i]=res.docs[i].data();
        console.log(this.pageSlice[i],"res");
      }
      
    })
  }
}
