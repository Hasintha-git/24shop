import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


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


  valueSet() {
    this.route.navigate(['/search/']).then(() => {
      // window.location.reload();
    });
  }

}
