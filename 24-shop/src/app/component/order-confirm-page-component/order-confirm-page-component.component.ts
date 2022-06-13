import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import {ItemServiceService} from 'src/app/services/items/item-service.service';
import {Toast} from '../../services/toast';
import {MatDialog} from '@angular/material/dialog';
import {LoginPageComponentComponent} from '../login-page-component/login-page-component.component';

export interface PeriodicElement {
  item: string;
  price: number;
  qty: number;
  subTotal: number;
}

@Component({
  selector: 'app-order-confirm-page-component',
  templateUrl: './order-confirm-page-component.component.html',
  styleUrls: ['./order-confirm-page-component.component.scss']
})
export class OrderConfirmPageComponentComponent implements OnInit {
  total: any;
  shipping: any;
  fullPrice: any;
  msg: any;

  displayedColumns: string[] = ['item', 'price', 'qty', 'subTotal'];
  // dataSource = ELEMENT_DATA;
  pageSlice: Array<any> = [];
  auth: any;
  constructor(public dialog: MatDialog,private toast: Toast,private router:Router,private itemService: ItemServiceService, private angularAuth: AngularFireAuth) {

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
    this.total = 0;
    this.shipping = 0;
    this.fullPrice = 0;
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
      if (res.size == 0) {
        this.msg = "Cart is Empty"
      } else {
        for (let i = 0; i < res.size; i++) {
          this.pageSlice[i] = res.docs[i].data();
          console.log(this.pageSlice[i].price, "res data ........");
          const itemPrice = parseInt(this.pageSlice[i].price);
          const itemQty = parseInt(this.pageSlice[i].qty);

          console.log(itemPrice, itemQty, "loadddd");

          this.total += itemPrice * itemQty;
          this.fullPrice = this.total + this.shipping

        }
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

      if (this.auth != undefined) {
        this.itemService.orderConfirm(this.auth,this.pageSlice,this.fullPrice,this.shipping)
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
