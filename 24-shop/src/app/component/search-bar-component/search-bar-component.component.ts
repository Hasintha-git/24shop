import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
// import { Serach } from 'src/app/services/search/serach';
import { SerachService} from '../../services/search/serach'

@Component({
  selector: 'app-search-bar-component',
  templateUrl: './search-bar-component.component.html',
  styleUrls: ['./search-bar-component.component.scss']
})
export class SearchBarComponentComponent implements OnInit {
  public search: any;
  pageSlice: Array<any> = [];
  searchResult: any;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  public keyPress = (event: KeyboardEvent) => {
    if (event.key == 'Enter') {
      console.log(this.search);
      this.valueSet()
    }

  }

  counter() {
    this.route.navigate(['/home'])
    
  }
  loadItems() {
    this.valueSet()
  }
  valueSet() {
    sessionStorage.removeItem('search')
    sessionStorage.setItem('search',this.search)
    this.route.navigate(['/search/'])
  }

}
