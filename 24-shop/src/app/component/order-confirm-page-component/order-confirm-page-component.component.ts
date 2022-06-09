import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { ItemServiceService } from 'src/app/services/items/item-service.service';
import { Toast } from '../../services/toast';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponentComponent } from '../login-page-component/login-page-component.component';

export interface PeriodicElement {
  item: string;
  price: number;
  qty: number;
  subTotal: number;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {item: 'chilli powder', price: 450.00, qty: 1, subTotal: 450.00},
//   {item: 'Banana 1 kg', price: 120.00, qty: 1, subTotal: 120.00},
//   {item: 'rice 10 kg', price: 1800.00, qty: 1, subTotal: 1800.00},
//   {item: 'Cocount 400g', price: 440.00, qty: 1, subTotal: 440.00},
//   {item: 'dalk 2 kg', price: 1100.00, qty: 2, subTotal: 2200.00},
//   {item: 'yorgut', price: 60.00, qty: 10, subTotal: 600.00},

// ];

@Component({
  selector: 'app-order-confirm-page-component',
  templateUrl: './order-confirm-page-component.component.html',
  styleUrls: ['./order-confirm-page-component.component.scss']
})
export class OrderConfirmPageComponentComponent implements OnInit {
  total: number;
  shipping: number;
  fullPrice: number;

  displayedColumns: string[] = ['item', 'price', 'qty', 'subTotal'];
  // dataSource = ELEMENT_DATA;
  pageSlice: Array<any> = [];
  auth: any;
  constructor(public dialog: MatDialog,private toast: Toast,private router:Router,private itemService: ItemServiceService, private angularAuth: AngularFireAuth) {
    this.total = 0;
    this.shipping = 0;
    this.fullPrice = 0;
    console.log(this.auth);
    this.authUserSet()


  }

  async authUserSet() {
    await this.angularAuth.onAuthStateChanged(user => {
      console.log("hi", user?.uid);
      this.auth = user?.uid
      console.log(this.auth);
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadCart()
    }, 1000);
    this.authUserSet()
    setTimeout(() => {
      this.deliveryCost()
    }, 3000);
  }

  openWarning() {
    this.toast.openWarning("hello", "hi");
  }

  loadCart() {
    this.itemService.cartList(this.auth).then((res) => {
      console.log(res, "size");
      sessionStorage.removeItem("search")
      for (let i = 0; i < res.size; i++) {
        this.pageSlice[i] = res.docs[i].data();
        console.log(this.pageSlice[i].price, "res data ........");
        this.total+=parseInt(this.pageSlice[i].price);
        this.fullPrice=this.total+this.shipping
    
      }
    })
  }

  close(row: any) {
    console.log(row);
    this.itemService.removeCart(row, this.auth).then((res) => {
      window.location.reload()
    })
  }

  clearCart() {
    this.itemService.clearCart(this.auth).then((res) => {
      window.location.reload()
    })
  }

  deliveryCost() {
    this.itemService.getdeliveryCost().then((res) => {
      console.log(res,"res");
      this.shipping=parseInt(res)
      this.fullPrice=this.total+this.shipping
    })
  }

  confirmOrder() {
    this.toast.openSuccess("Success","hello")
      if (this.auth != undefined) {
        

      }else{
        
        setTimeout(() => {
          console.log("time out");
          
          this.openDialog()
        }, 30000);
      }

  }

  openDialog() {
    this.dialog.open(LoginPageComponentComponent);
  }
}
