import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterPageComponentComponent } from '../register-page-component/register-page-component.component';
import { getAuth, setPersistence, inMemoryPersistence, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { AuthService } from '../shared/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Toast } from 'src/app/services/toast';
import { MoreDetailsPageComponentComponent } from './additional-data/more-details-page-component/more-details-page-component.component';

@Component({
  selector: 'app-login-page-component',
  templateUrl: './login-page-component.component.html',
  styleUrls: ['./login-page-component.component.scss']
})
export class LoginPageComponentComponent implements OnInit {
  User: any = ['Super Admin', 'Author', 'Reader'];
  email: any;
  password: any;
  loginForm: FormGroup;
  firebaseErrorMessage: string;
  hide = true;


  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog, private dialogRef: MatDialogRef<LoginPageComponentComponent>, public aFAuth: AngularFireAuth, private notification: Toast) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    });

    this.firebaseErrorMessage = '';

  }

  ngOnInit(): void {
  }

  logout(): void {
    this.aFAuth.signOut();
  }


  async register() {
    this.dialogRef.close(LoginPageComponentComponent);
    this.dialog.open(RegisterPageComponentComponent);
  }

  onSubmit() {
    console.log("onsubmit");

    if (this.loginForm.invalid) {
      this.notification.openWarning("Invalid data", "please input valid data")
      return;

    }
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
      console.log(result, "submited");

    });



  }

  logWithGoogle() {
    console.log("sign in with google");
    
    this.authService.signinWIthGoogle().subscribe((res) => {
      console.log(res.user.email, res.user.displayName, res.user.uid);
      this.dialogRef.close(LoginPageComponentComponent)
      let dialog = this.dialog.open(MoreDetailsPageComponentComponent);
      dialog.componentInstance.displayName = res.user.displayName;
      dialog.componentInstance.email = res.user.email!;
      dialog.componentInstance.uid = res.user.uid;

    })

  }

}
