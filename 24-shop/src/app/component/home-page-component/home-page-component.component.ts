import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.scss']
})
export class HomePageComponentComponent implements OnInit {

  constructor() { }
  
  image: string | undefined;
  luxury: string|undefined;

  ngOnInit(): void {
    this.luxury="/cars/luxury-cars";
  }

}
