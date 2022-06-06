import { Injectable } from '@angular/core';
import { Firestore,doc } from '@angular/fire/firestore';
import { setDoc, updateDoc } from '@firebase/firestore';
import { from, Observable } from 'rxjs';
import { ProfileUser } from '../../model/userProfile';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: Firestore) { }

  saveCustomer(user:ProfileUser):Observable<any> {
    console.log("save customer",user.email);
    const ref = doc(this.firestore,'User',user.uid);
    return from(setDoc(ref,user));
  }

  updateCustomer(user:ProfileUser): Observable<any> {
    const ref = doc(this.firestore,'User',user.uid);
    return from(updateDoc(ref,{...user}));
  }
}
