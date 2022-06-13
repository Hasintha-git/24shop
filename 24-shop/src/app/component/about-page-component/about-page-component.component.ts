import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-page-component',
  templateUrl: './about-page-component.component.html',
  styleUrls: ['./about-page-component.component.scss']
})
export class AboutPageComponentComponent implements OnInit {
  imgUrl: any;

  constructor() {
    this.imgUrl = "../../../assets/adds/delivery.png";
  }

  ngOnInit(): void {
  }

}
