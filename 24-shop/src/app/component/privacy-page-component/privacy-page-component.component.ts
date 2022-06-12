import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-page-component',
  templateUrl: './privacy-page-component.component.html',
  styleUrls: ['./privacy-page-component.component.scss']
})
export class PrivacyPageComponentComponent implements OnInit {
  imgUrl:any;

  constructor() {
      this.imgUrl="../../../assets/adds/privacy.png";
   }

  ngOnInit(): void {
  }

}
