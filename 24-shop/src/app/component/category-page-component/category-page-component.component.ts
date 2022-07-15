import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-page-component',
  templateUrl: './category-page-component.component.html',
  styleUrls: ['./category-page-component.component.scss']
})
export class CategoryPageComponentComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    // this.router.navigate(['/', 'grocery']);
    this.navLinks = [
      {
        label: 'chilled',
        link: './chilled',
        index: 0
      },
      {
        label: 'household',
        link: './household',
        index: 1
      },
      {
        label: 'grocery',
        link: './grocery',
        index: 2
      }, {
        label: 'beverages',
        link: './beverages',
        index: 3
      }, {
        label: 'frozen-food',
        link: './frozen-food',
        index: 4
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
