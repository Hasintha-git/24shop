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

  imgurl_1:any;
  imgurl_2:any;

  
  constructor() {
    this.imgurl_1="../../assets/adds/vegi.png"
    this.imgurl_2="../../assets/adds/ice.png"

   }

  ngOnInit(): void {
  }

  
}
