import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {LoginPageComponentComponent} from '../login-page-component/login-page-component.component';


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
      if (user) {
        user.getIdToken().then(idToken => {
          this.router.navigate(['/orderConfirm'])
          sessionStorage.setItem('user',JSON.stringify(user.uid))
        })

      }else{
          this.openDialog()

      }
    }).then((res)=> {

    }).catch(err=> {

    })
  }

  openDialog() {
    this.dialog.open(LoginPageComponentComponent);
  }

  clickLogo() {
    this.router.navigate(['home'])
  }

}
