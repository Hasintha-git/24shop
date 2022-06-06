import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginPageComponentComponent } from '../../component/login-page-component/login-page-component.component'
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.scss']
})
export class HomePageComponentComponent implements OnInit {
  isSignIn:any;

  constructor(private router:Router,public dialog: MatDialog,private aFAuth:AngularFireAuth,private authService:AuthService) {
    this.aFAuth.onAuthStateChanged(user => {
      if (user) {
        // router.navigate(['/home'])
        user.getIdToken().then(idToken => {
          router.navigate(['/home'])
          // console.log("sucess");
          // let userObj ={
          //   user: {
          //     email:user.email
          //   },
          //   token:idToken
          // }
          
          sessionStorage.setItem('user',JSON.stringify(user.uid))
        })

      }else{
        console.log("else");
        
        setTimeout(() => {
          console.log("time out");
          
          this.openDialog()
        }, 30000);
      }
    })

  }


  ngOnInit(){
  
  }

  openDialog() {
    this.dialog.open(LoginPageComponentComponent);
  }

  // checkLocalStorage() {
  //   if (!localStorage.getItem('user')) {
  //     this.getDataFromFirebase();
  //   } else {
  //     console.log('localStorage ready!');
  //   }

  // }

  // getDataFromFirebase() {
  //   this.aFAuth.authState.subscribe(auth => {
  //     if (auth) {
  //       console.log('Authenticated');
  //       this.authService.setUserLoggedIn(auth); // set user data from firebase on local storage
  //     } else {
  //       setTimeout(() => {
  //         this.openDialog()
  //       }, 10000);
  //     }
  //   });
  // }


}
