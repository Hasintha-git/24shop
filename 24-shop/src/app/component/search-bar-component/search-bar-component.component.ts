import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);
@Component({
  selector: 'app-search-bar-component',
  templateUrl: './search-bar-component.component.html',
  styleUrls: ['./search-bar-component.component.scss']
})
export class SearchBarComponentComponent implements OnInit {
  public search: any;
  pageSlice: Array<any> = [];
  searchResult: any;

  config = {
    indexName: 'demo_ecommerce',
    searchClient
  };
  
  showResults=false;

  constructor(private route:Router) { }

  onSearch(q:any){
    if(q.length>0){
      console.log("true");
      
      this.showResults=true;
    }else {
      this.showResults=false
    }
  }
  ngOnInit(): void {
  }

  public keyPress = (event: KeyboardEvent) => {
    if (event.key == 'Enter') {
      this.valueSet()
    }

  }
  loadItems() {
    this.valueSet()
  }
  valueSet() {
    sessionStorage.setItem('search',this.search)
    this.route.navigate(['/search/']).then(() => {
      window.location.reload();
    });
  }

}
