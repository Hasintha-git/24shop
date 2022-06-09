import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ItemServiceService } from 'src/app/services/items/item-service.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponentComponent } from '../login-page-component/login-page-component.component';

@Component({
  selector: 'app-order-add-page-component',
  templateUrl: './order-add-page-component.component.html',
  styleUrls: ['./order-add-page-component.component.scss']
})
export class OrderAddPageComponentComponent implements OnInit {
  qtyCount:number;
  price:any;
  // temPrice:number;
  // description:string;
  // title:string;
  auth:any;
  currentData:Array<any>=[];
  title:any;
  
  constructor(private itemService:ItemServiceService,private angularAuth:AngularFireAuth,private router:Router,public dialog: MatDialog) {
    this.loadSelectedItem()
    this.qtyCount=1;
    
   }

  ngOnInit(): void {
  }

  plus(){
    this.qtyCount=this.qtyCount+1;
    this.price=this.currentData[0].price*this.qtyCount;
  }

  min(){
    if (this.qtyCount>1) {
    this.qtyCount=this.qtyCount-1
    this.price=this.currentData[0].price*this.qtyCount;
    }
  }

  loadSelectedItem(){
    this.title=sessionStorage.getItem('buyItem');
    console.log("set",this.title);
    this.itemService.searchItem(this.title).then((res)=> {
      console.log(res,"size");
      
      for (let i = 0; i < res.size; i++) {
        
        this.currentData[i]=res.docs[i].data();
        console.log(this.currentData[i],"res");
      }

      this.price=this.currentData[0].price*this.qtyCount;

    // console.log(res,"res");
    
  })
  }


  addtoCart(item:any){
    if (this.auth==undefined) {
      console.log("user set");
      
        this.authUserSet()
    }else{
      console.log("else");

      this.itemService.addToCart(item,this.qtyCount,this.price,this.auth);
    }
    
  }

  
  async authUserSet(){
    await this.angularAuth.onAuthStateChanged(user=> {
      if (user==undefined) {
        const authUser=sessionStorage.getItem('user')
        console.log(authUser);
        
        if (authUser==null) {
          this.openDialog()
        } else {
          this.auth=authUser
        }
       
        return
      }else{
        console.log("hi",user?.uid);
        this.auth=user?.uid
        console.log(this.auth);
        return user?.uid;
      }

    })
  }

  
  openDialog() {
    this.dialog.open(LoginPageComponentComponent);
  }
}
