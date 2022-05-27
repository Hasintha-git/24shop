import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page-component',
  templateUrl: './contact-page-component.component.html',
  styleUrls: ['./contact-page-component.component.scss']
})
export class ContactPageComponentComponent implements OnInit {

  imgUrl:any;

  constructor() {
      this.imgUrl="../../../assets/adds/contact.png";
   }
  ngOnInit(): void {
  }

}
