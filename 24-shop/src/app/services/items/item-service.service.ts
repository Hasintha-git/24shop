import { Injectable } from '@angular/core';
import { Storage, ref } from '@angular/fire/storage';
import { Firestore } from '@angular/fire/firestore';
import { getDocs, setDoc, updateDoc, collection, query, limit, doc, where,orderBy, startAt, endAt } from '@firebase/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  dataCollection: any=[];
  auth:any;
  constructor(private storage: Storage, private fire: Firestore,private angularAuth:AngularFireAuth) {
   }


  async getItem(category:string) {
    console.log("get item",category);
    var citiesRef = collection(this.fire, "Items")
    const querySnapshot  =await query(citiesRef, where('category', "==", category));
   console.log("error",querySnapshot);
   
    
    const data= await getDocs(querySnapshot)
    console.log(data.size,"data");
    
    data.forEach(element=> {
      console.log(element.data(),"for");
       
    })
    
    return data
  }

  async searchCustomers(userName:any) {
    console.log("get customer",userName);
    var citiesRef = collection(this.fire, "User")
    const querySnapshot = await query(citiesRef, where('userName', "==", userName));
   
    
    const data= await getDocs(querySnapshot)
    console.log(data.size,"data");
    
    data.forEach(element=> {
      console.log(element.data(),"for");
       
    })
    
    return data

  }

  async searchItem(item:string) {
    console.log("get item",item);
    var citiesRef = collection(this.fire, "Items")
    const querySnapshot  =await query(citiesRef, orderBy('title'),startAt(item),endAt(item+"\uf8ff"));
   console.log("error",querySnapshot);
   
    
    const data= await getDocs(querySnapshot)
    console.log(data.size,"data");
    
    data.forEach(element=> {
      console.log(element.data(),"for");
       
    })
    
    return data
  }

  async getTrending(count:any) {
    console.log("get item");
    var citiesRef = collection(this.fire, "Items")
    const querySnapshot  =await query(citiesRef, orderBy('status'),limit(count))
    
    console.log(getDocs(querySnapshot));
  
    
    const data= await getDocs(querySnapshot)
    data.forEach(element=> {
      console.log(element.data());
       
    })
    
    return data

  }

  async addToCart(item:any,qty:any,price:any):Promise<any> {

    // await this.authUserSet()
    console.log("add item",item,qty,price,this.auth);
    const ref = doc(this.fire, 'Cart',item.title);

    this.dataCollection = {
      'title': item.title,
      'price': item.price,
      'qty': qty,
      'subPrice': price,
      'uid': this.auth.uid,

    }
    return from(setDoc(ref, this.dataCollection));
  }

  async cartList(auth:any) {
    
    // const auth= await this.authUserSet()


    console.log('ooooooo');
    // let uid=sessionStorage.getItem('user')
    console.log(auth);
    
    
    var citiesRef = collection(this.fire, "Cart")
    const querySnapshot = await query(citiesRef, where('uid', "==", auth));
   
    
    const data= await getDocs(querySnapshot)
    console.log(data.size,"data");
    
    data.forEach(element=> {
      console.log(element.data(),"for");
       
    })
    
    return data

  }

}
