import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-delivery-page-component',
  templateUrl: './delivery-page-component.component.html',
  styleUrls: ['./delivery-page-component.component.scss']
})
export class DeliveryPageComponentComponent implements OnInit {
  imgUrl:any;

  constructor() {
      this.imgUrl="../../../assets/adds/delivery.png";
   }

  ngOnInit(): void {
  }

}
