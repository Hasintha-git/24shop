import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth.service';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Toast } from 'src/app/services/toast';
import { Observable, switchMap } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { CrudService } from 'src/app/services/User/crud.service';
import { ProfileUser } from 'src/app/model/userProfile';
import { LoginPageComponentComponent } from '../../login-page-component.component';

@Component({
  selector: 'app-more-details-page-component',
  templateUrl: './more-details-page-component.component.html',
  styleUrls: ['./more-details-page-component.component.scss']
})
export class MoreDetailsPageComponentComponent implements OnInit {
  public email!: string;
  public displayName: string | null | undefined;
  public uid!: string;

  signupForm:any;

  constructor(private userService:CrudService,private router : Router,private dialogRef: MatDialogRef<LoginPageComponentComponent>,private authservice:AuthService,private notification:Toast,private saveCustomer:CrudService) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "userName":new FormControl('',Validators.required),
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
    const {userName,address,phone} =this.signupForm.value;
    // let newUser = new ProfileUser(this.uid,this.email,address,phone,userName);
    // console.log(newUser,"**");
    
    this.saveCustomer.saveCustomer({uid:this.uid,email:this.email,address,phone,userName}).subscribe((res)=> {
      this.dialogRef.close(MoreDetailsPageComponentComponent)
      
      this.notification.openSuccess("Saved Success","done")
    })
  }

}
