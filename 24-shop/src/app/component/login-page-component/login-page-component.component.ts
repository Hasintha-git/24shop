import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login-page-component',
  templateUrl: './login-page-component.component.html',
  styleUrls: ['./login-page-component.component.scss']
})
export class LoginPageComponentComponent implements OnInit {
  User: any = ['Super Admin', 'Author', 'Reader'];
  
  constructor(private toast: NgToastService) { }

  ngOnInit(): void {
  }

  openWarning(){
    this.toast.warning({detail:'warning message',summary:'This is warning summery',position:'bl',duration:5000});
  }
  openSuccess(){
    this.toast.success({detail:'success message',summary:'This is success summery',position:'tl',duration:5000});
  }
  openError(){
    this.toast.error({detail:'error message',summary:'This is error summery',position:'br',duration:5000});
  }
  openInfo(){
    this.toast.info({detail:'info message',summary:'This is info summery',position:'tr',sticky:true,type:'info',duration:5000});
  }

}
