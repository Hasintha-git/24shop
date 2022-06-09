import { Component, OnInit } from '@angular/core';
import* as AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '24-shop';
  showme:boolean=true;

  constructor(){

  }

  ngOnInit(): void {
    AOS.init();
  }
}
