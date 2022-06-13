import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import {ItemServiceService} from 'src/app/services/items/item-service.service';
import {MatDialog} from '@angular/material/dialog';
import {LoginPageComponentComponent} from '../login-page-component/login-page-component.component';
import {Toast} from 'src/app/services/toast';

@Component({
  selector: 'app-order-add-page-component',
  templateUrl: './order-add-page-component.component.html',
  styleUrls: ['./order-add-page-component.component.scss']
})
export class OrderAddPageComponentComponent implements OnInit {
  qtyCount:number;
  price:any;
  currentQty:number;
  auth:any;
  currentData:Array<any>=[];
  title:any;

  constructor(private itemService:ItemServiceService,private angularAuth:AngularFireAuth,private toast:Toast,private router:Router,public dialog: MatDialog) {
    this.currentQty=0;
    this.qtyCount=0;

    this.loadSelectedItem()

  }

  ngOnInit(): void {
    this.authUserSet()
  }

  plus(){
    if (this.currentQty>this.qtyCount) {
      this.qtyCount=this.qtyCount+1;
      this.price=this.currentData[0].price*this.qtyCount;
    }else{
      this.toast.openInfo("Out of stock","please contact us")
    }

  }

  min(){
    if (this.qtyCount>1) {
    this.qtyCount=this.qtyCount-1
    this.price=this.currentData[0].price*this.qtyCount;
    }else{
      this.toast.openInfo("QTY is 0","Please add QTY  ")
    }
  }

  loadSelectedItem(){
    this.title=sessionStorage.getItem('buyItem');
    this.itemService.searchItem(this.title).then((res)=> {
      for (let i = 0; i < res.size; i++) {
        this.currentData[i]=res.docs[i].data();
      }
      this.currentQty=this.currentData[0].qty
      if (this.currentQty>0) {
        this.qtyCount=1
      }
      this.price=this.currentData[0].price*this.qtyCount;

    })
  }


  addtoCart(item:any){
    if (this.qtyCount>0) {
      if (this.auth==undefined) {
          this.authUserSet()
      }else{
        this.itemService.addToCart(item,this.qtyCount,this.price,this.auth);
      }
    }else{
      this.toast.openInfo("QTY is 0","Please add Item count")
    }


  }


  async authUserSet(){
    await this.angularAuth.onAuthStateChanged(user=> {
      if (user==undefined) {
        const authUser=sessionStorage.getItem('user')
        if (authUser==null) {
          this.openDialog()
        } else {
          this.auth=authUser
        }

        return
      }else{
        this.auth=user?.uid
        return user?.uid;
      }

    })
  }


  openDialog() {
    this.dialog.open(LoginPageComponentComponent);
  }
}
