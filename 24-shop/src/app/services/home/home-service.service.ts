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
export class HomeServiceService {

  constructor(private storage: Storage, private fire: Firestore, private angularAuth: AngularFireAuth, private router: Router, private toast: Toast, private angularFire: AngularFirestore) { }

  
}
