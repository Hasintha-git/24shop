import { NgToastService } from 'ng-angular-popup';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class Toast {
    constructor(private toast: NgToastService) { 

    }


    openWarning(details:string,summer:string){
        this.toast.success({detail:details,summary:summer,position:'bl',duration:5000}),{
            enableHtml :  true
        };
    }
}
