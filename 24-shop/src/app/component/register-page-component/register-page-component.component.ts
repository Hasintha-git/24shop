import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Toast } from 'src/app/services/toast';
import { Observable, switchMap } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { CrudService } from 'src/app/services/User/crud.service';

@Component({
  selector: 'app-register-page-component',
  templateUrl: './register-page-component.component.html',
  styleUrls: ['./register-page-component.component.scss']
})
export class RegisterPageComponentComponent implements OnInit {
  User: any = ['Super Admin', 'Author', 'Reader'];
  // email: any;
  // password: any;
  // userName:any;
  // adress:any;
  // phone:any;

  signupForm:any;
  firebaseFormMessage:any;


  constructor(private userService:CrudService,private router : Router,private dialogRef: MatDialogRef<RegisterPageComponentComponent>,private authservice:AuthService,private aFAuth:AngularFireAuth,private notification:Toast,private firestore: AngularFirestore,private saveCustomer:CrudService) {
  }
 
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "userName":new FormControl('',Validators.required),
      "email":new FormControl('',[Validators.required,Validators.email]),
      "password":new FormControl('',Validators.required),
      "address":new FormControl('',Validators.required),
      "phone":new FormControl('',Validators.required),

    })
  }

  onSubmit(f: any) {
    console.log("onSubmit",this.signupForm.value);
    
   if (this.signupForm.invalid){
    this.notification.openWarning("Invalid data","please input valid data")
    return;
   }
    const {userName,email,password,address,phone} =this.signupForm.value;
     
    this.authservice
    .register(email,password)
    .pipe(
      switchMap(({user:{uid}})=> 
      
      this.userService.saveCustomer({uid,email,address,phone,userName})
      ),
      
      ).subscribe((res)=> {
      alert("wrong")
    })
  }

}
