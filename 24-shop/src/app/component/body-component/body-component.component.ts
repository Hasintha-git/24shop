import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.scss'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('img',style({ transform: 'translateX(-100%)'})),
        query('img',
          stagger('800ms', [
            animate('1200ms', style({ transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})


export class BodyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
}
