import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginPageComponentComponent } from '../login-page-component/login-page-component.component';


@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.scss']
})
export class NavBarComponentComponent implements OnInit {
  showFiller = false;
  
  @Output() public sidenavToggle = new EventEmitter();
  constructor(private router:Router,public dialog: MatDialog,private aFAuth:AngularFireAuth) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }

  orderConfirm() {
    this.aFAuth.onAuthStateChanged(user => {
      console.log(user,"user");
      if (user) {
      console.log("true");

        user.getIdToken().then(idToken => {
          this.router.navigate(['/orderConfirm'])
          sessionStorage.setItem('user',JSON.stringify(user.uid))
        })

      }else{
        console.log("else");
        
          this.openDialog()

      }
    }).then((res)=> {
      console.log("res",res);
      
    }).catch(err=> {
      console.log(err,"err");
      
    })
  }

  openDialog() {
    this.dialog.open(LoginPageComponentComponent);
  }

  clickLogo() {
    this.router.navigate(['home'])
  }

}
