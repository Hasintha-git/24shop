import {Injectable} from '@angular/core';
import {Storage} from '@angular/fire/storage';
import {Firestore} from '@angular/fire/firestore';
import {collection, getDocs, query} from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  dataCollection: any=[];

  constructor(private storage: Storage, private fire: Firestore) { }

  async getCategory() {
    var citiesRef = collection(this.fire, "Category")
    const querySnapshot  =await query(citiesRef)

    const data= await getDocs(querySnapshot)

    return data

  }


}
