import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delivery-page-component',
  templateUrl: './delivery-page-component.component.html',
  styleUrls: ['./delivery-page-component.component.scss']
})
export class DeliveryPageComponentComponent implements OnInit {
  imgUrl:any;

  constructor(private route: Router) {
      this.imgUrl="../../../assets/adds/delivery.png";
   }

  ngOnInit(): void {
  }

  contact() {
    this.route.navigate(['/contact'])
  }
}
