import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar-component',
  templateUrl: './search-bar-component.component.html',
  styleUrls: ['./search-bar-component.component.scss']
})
export class SearchBarComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

public keyPress = (event: KeyboardEvent) => { 
  if (event.key=='a') {
    console.log("enter");
  } else {
    console.log("wrong");
  }

}

}
