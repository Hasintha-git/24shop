import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {LoginPageComponentComponent} from '../../component/login-page-component/login-page-component.component'
import {AuthService} from '../shared/auth.service';


@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.scss']
})
export class HomePageComponentComponent implements OnInit {
  isSignIn:any;

  constructor(private router:Router,public dialog: MatDialog,private aFAuth:AngularFireAuth,private authService:AuthService) {


  }


  ngOnInit(){

  }

  openDialog() {
    this.dialog.open(LoginPageComponentComponent);
  }

}
