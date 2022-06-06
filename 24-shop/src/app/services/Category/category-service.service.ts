import { Injectable } from '@angular/core';
import { Storage, ref } from '@angular/fire/storage';
import { Firestore } from '@angular/fire/firestore';
import { getDocs, setDoc, updateDoc, collection, query, limit, doc, where,orderBy } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  dataCollection: any=[];

  constructor(private storage: Storage, private fire: Firestore) { }

  async getCategory() {
    console.log("get customer");
    var citiesRef = collection(this.fire, "Category")
    const querySnapshot  =await query(citiesRef)
    
    console.log(getDocs(querySnapshot));
  
    
    const data= await getDocs(querySnapshot)
    data.forEach(element=> {
      console.log(element.data());
       
    })
    
    return data

  }


}
