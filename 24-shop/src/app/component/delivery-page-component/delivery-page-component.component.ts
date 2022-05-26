import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  city: string;
  position: number;
  price: number;
  km: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, city: 'Hydrogen', price: 1.0079, km: 10},
  {position: 2, city: 'Helium', price: 4.0026, km: 15},
  {position: 3, city: 'Lithium', price: 6.941, km: 2},
  {position: 4, city: 'Beryllium', price: 9.0122, km: 6},
  {position: 5, city: 'Boron', price: 10.811, km: 11},
  {position: 6, city: 'Carbon', price: 12.0107, km: 7},
  {position: 7, city: 'Nitrogen', price: 14.0067, km: 8},
  {position: 8, city: 'Oxygen', price: 15.9994, km: 12},
  {position: 9, city: 'Fluorine', price: 18.9984, km: 3},
  {position: 10, city: 'Neon', price: 20.1797, km: 9},
];
@Component({
  selector: 'app-delivery-page-component',
  templateUrl: './delivery-page-component.component.html',
  styleUrls: ['./delivery-page-component.component.scss']
})
export class DeliveryPageComponentComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
