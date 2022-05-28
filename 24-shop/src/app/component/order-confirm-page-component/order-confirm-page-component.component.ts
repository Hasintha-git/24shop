import { Component, OnInit } from '@angular/core';
import { Toast } from '../../services/toast';


export interface PeriodicElement {
  item: string;
  price: number;
  qty: number;
  subTotal: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: 'chilli powder', price: 450.00, qty: 1, subTotal: 450.00},
  {item: 'Banana 1 kg', price: 120.00, qty: 1, subTotal: 120.00},
  {item: 'rice 10 kg', price: 1800.00, qty: 1, subTotal: 1800.00},
  {item: 'Cocount 400g', price: 440.00, qty: 1, subTotal: 440.00},
  {item: 'dalk 2 kg', price: 1100.00, qty: 2, subTotal: 2200.00},
  {item: 'yorgut', price: 60.00, qty: 10, subTotal: 600.00},

];

@Component({
  selector: 'app-order-confirm-page-component',
  templateUrl: './order-confirm-page-component.component.html',
  styleUrls: ['./order-confirm-page-component.component.scss']
})
export class OrderConfirmPageComponentComponent implements OnInit {
  total:any;
  shipping:any;
  fullPrice:any;

  displayedColumns: string[] = ['item', 'price', 'qty', 'subTotal'];
  dataSource = ELEMENT_DATA;
  constructor(private toast: Toast) { 
    this.total='4910.00';
    this.shipping='490.00';
    this.fullPrice='5400.00'
  }

  ngOnInit(): void {
  }

  openWarning(){
    this.toast.openWarning("hello","hi");
  }

}
