import { Injectable } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { Firestore } from '@angular/fire/firestore';
import { getDocs, setDoc, collection, query, limit, doc, where, orderBy, startAt, endAt, deleteDoc, getDoc } from '@firebase/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Toast } from '../toast';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  dataCollection: any = [];
  constructor(private storage: Storage, private fire: Firestore, private angularAuth: AngularFireAuth, private router: Router, private toast: Toast, private angularFire: AngularFirestore) {}

  // get item
  async getItem(category: string) {
    console.log("get item", category);
    var citiesRef = collection(this.fire, "Items")
    const querySnapshot = await query(citiesRef, where('category', "==", category));
    console.log("error", querySnapshot);


    const data = await getDocs(querySnapshot)
    console.log(data.size, "data");

    data.forEach(element => {
      console.log(element.data(), "for");

    })

    return data
  }

  // search customer 
  async searchCustomers(userName: any) {
    console.log("get customer", userName);
    var citiesRef = collection(this.fire, "User")
    const querySnapshot = await query(citiesRef, where('userName', "==", userName));


    const data = await getDocs(querySnapshot)
    console.log(data.size, "data");

    data.forEach(element => {
      console.log(element.data(), "for");

    })

    return data

  }

  // search item 
  async searchItem(item: string) {
    console.log("get item", item);
    var citiesRef = collection(this.fire, "Items")
    const querySnapshot = await query(citiesRef, orderBy('title'), startAt(item), endAt(item + "\uf8ff"));
    console.log("error", querySnapshot);

    const data = await getDocs(querySnapshot)
    console.log(data.size, "data");

    data.forEach(element => {
      console.log(element.data(), "for");
    })
    return data
  }

  // get trending product
  async getTrending(count: any) {
    console.log("get item");
    var citiesRef = collection(this.fire, "Items")
    const querySnapshot = await query(citiesRef, orderBy('status'), limit(count))
    console.log(getDocs(querySnapshot));
    const data = await getDocs(querySnapshot)
    data.forEach(element => {
      console.log(element.data());
    })
    return data
  }

  // add to cart 
  async addToCart(item: any, qty: any, price: any, auth: any): Promise<any> {
    console.log("cart add service",auth);
    
    const q = query(collection(this.fire, `Cart/${auth}/more`));
    
    const querySnapshot = await getDocs(q);
    const queryData = querySnapshot.docs.map((details) => ({
      ...details.data(),
      id: details.id,
    }));
    console.log(queryData.length,"queryData");

    if (queryData.length==0) {
      await setDoc(doc(this.fire, `Cart/${auth}/more`, item.title), {
        'title': item.title,
        'price': item.price,
        'qty': qty,
        'subPrice': price,
        'uid': auth,
      })
    this.router.navigate(['/orderConfirm'])

    } else {
    queryData.map(async (v, id) => {
      await setDoc(doc(this.fire, `Cart/${auth}/more`, item.title), {
        'title': item.title,
        'price': item.price,
        'qty': qty,
        'subPrice': price,
        'uid': auth,
      })
    })
    this.router.navigate(['/orderConfirm'])

  }
  }

   // cart list load to table
  async cartList(auth: any) {
    console.log("cart list");
    
    const querySnapshot = await getDocs(collection(this.fire, `/Cart/${auth}/more/`));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    return querySnapshot;
  }

   // cart clear item wise 
  async removeCart(row: any, auth: any) {
    const cityRef = doc(this.fire, `/Cart/${auth}/more/`, row.title)
    await deleteDoc(cityRef).then((res) => {
      this.toast.openSuccess("Remove Item", row.title)
      return res
    }).catch(err => {
      console.log(err);
      this.toast.openWarning("Remove Item faild", row.title)
    })
    return
  }

  // cart clear 
  async clearCart(auth: any) {
    this.angularFire.collection(`/Cart/${auth}/more/`).get().toPromise().then((querySnap) => {
      querySnap?.forEach((doc) => {
        doc.ref.delete().then((res) => {
          this.toast.openSuccess("Remove Item", "Success")
        }).catch(err => {
          this.toast.openWarning("Remove Item faild", "Wrong")
        })
      })
    })
  }


  async getdeliveryCost() {
    const docRef = doc(this.fire, "DeliveryCost", "KbkvXDGBuzdRcZ7OvhUX");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      // retrun docSnap.data().price
      console.log("Document data:", docSnap.get('price'));
      return docSnap.get('price')
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

}
