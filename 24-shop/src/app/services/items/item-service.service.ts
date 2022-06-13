import {Injectable} from '@angular/core';
import {Storage} from '@angular/fire/storage';
import {Firestore} from '@angular/fire/firestore';
import {
  collection,
  deleteDoc,
  doc,
  endAt,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  startAt,
  where
} from '@firebase/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import {Toast} from '../toast';
import {AngularFirestore} from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  dataCollection: any = [];
  orderDetailsCollection: any = [];
  constructor(private storage: Storage, private fire: Firestore, private angularAuth: AngularFireAuth, private router: Router, private toast: Toast, private angularFire: AngularFirestore) { }

  // get item
  async getItem(category: string) {
    var citiesRef = collection(this.fire, "Items")
    const querySnapshot = await query(citiesRef, where('category', "==", category));

    const data = await getDocs(querySnapshot)
    return data
  }

  // search customer
  async searchCustomers(userName: any) {
    var citiesRef = collection(this.fire, "User")
    const querySnapshot = await query(citiesRef, where('userName', "==", userName));


    const data = await getDocs(querySnapshot)

    return data

  }

  // search item
  async searchItem(item: string) {
    var citiesRef = collection(this.fire, "Items")
    const querySnapshot = await query(citiesRef, orderBy('title'), startAt(item), endAt(item + "\uf8ff"));

    const data = await getDocs(querySnapshot)

    if (data.size == 0) {
      this.toast.openWarning("Item Not Found", "Wrong input")
    }

    return data
  }

  // get trending product
  async getTrending(count: any) {
    var citiesRef = collection(this.fire, "Items")
    const querySnapshot = await query(citiesRef, orderBy('status'), limit(count))
    const data = await getDocs(querySnapshot)

    return data
  }

  // add to cart
  async addToCart(item: any, qty: any, price: any, auth: any): Promise<any> {
    const q = query(collection(this.fire, `Cart/${auth}/more`));

    const querySnapshot = await getDocs(q);
    const queryData = querySnapshot.docs.map((details) => ({
      ...details.data(),
      id: details.id,
    }));

    if (queryData.length == 0) {
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
    const querySnapshot = await getDocs(collection(this.fire, `/Cart/${auth}/more/`));
    return querySnapshot;
  }

  // cart clear item wise
  async removeCart(row: any, auth: any) {
    const cityRef = doc(this.fire, `/Cart/${auth}/more/`, row.title)
    await deleteDoc(cityRef).then((res) => {
      this.toast.openSuccess("Remove Item", row.title)
      return res
    }).catch(err => {
      this.toast.openWarning("Remove Item faild", row.title)
    })
    return
  }

  // cart clear
  async clearCart(auth: any) {
    this.angularFire.collection(`/Cart/${auth}/more/`).get().toPromise().then((querySnap) => {
      querySnap?.forEach((doc) => {
        doc.ref.delete().then((res) => {
          // this.toast.openSuccess("Remove Item", "Success")
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
      return docSnap.get('price')
    } else {
      // doc.data() will be undefined in this case
    }
  }

  // add to order confirm
  async orderConfirm(auth: any, item: any, price: any, shipping: any): Promise<any> {
    const date = new Date();

    const confirmDate = date.toString()
    let visible = false;

    const orderDetails = query(collection(this.fire, `PendingDetails/${auth}/${confirmDate}`));

    await setDoc(doc(this.fire, `OrderPending`, confirmDate), {
      'price': price,
      'uid': auth,
      'date': confirmDate,
      'shippingCost': shipping,
      'type': 'pending'
    }).then((res) => {

      visible = true;

    })

    const querySnapshot = await getDocs(orderDetails);
    const queryData = querySnapshot.docs.map((details) => ({
      ...details.data(),
      id: details.id,
    }));

    if (visible) {
      if (queryData.length == 0) {
        for (let i = 0; i < item.length; i++) {
          await setDoc(doc(this.fire, `PendingDetails/${auth}/${confirmDate}`, item[i].title), {
            'title': item[i].title,
            'price': item[i].price,
            'qty': item[i].qty,
            'uid': auth,
            'date': confirmDate,
            'subTotal': item[i].subPrice,
          }).then((res) => {
            this.clearCart(auth)
            this.toast.openSuccess("Order Success", "Please wait")

            this.router.navigate(['/home'])

          }).catch((err) => {
            this.toast.openWarning("Order Faild", "Please try again")

          })

        }


      } else {
        queryData.map(async (v, id) => {
          for (let i = 0; i < item.length; i++) {
            await setDoc(doc(this.fire, `PendingDetails/${auth}/${confirmDate}`, item[i].title), {
              'title': item[i].title,
              'price': item[i].price,
              'qty': item[i].qty,
              'uid': auth,
              'date': confirmDate,
              'subTotal': item[i].subPrice,
            }).then((res) => {
              this.clearCart(auth)
              this.toast.openSuccess("Order Success", "Please wait")
              this.router.navigate(['/home'])

            }).catch((err) => {
              this.toast.openWarning("Order Faild", "Please try again")

            })
          }
        })


      }
    } else {
      this.toast.openWarning("Something whent wrong", "please try again")
    }
  }


}


