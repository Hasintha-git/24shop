import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/services/items/item-service.service';

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
  // itemNo:string;
  currentData:Array<any>=[];
  title:any;
  
  constructor(private itemService:ItemServiceService) {
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
    this.itemService.addToCart(item,this.qtyCount,this.price)
    
  }
}
