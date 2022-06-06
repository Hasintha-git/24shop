import { NgToastService } from 'ng-angular-popup';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class Toast {
    constructor(private toast: NgToastService) { 

    }


    openWarning(details:string,summer:string){
        this.toast.warning({detail:details,summary:summer,position:'br',duration:5000}),{
            enableHtml :  true
        };
    }
    openSuccess(details:string,summer:string){
        this.toast.success({detail:details,summary:summer,position:'br',duration:5000}),{
            enableHtml :  true
        };
    }
    openError(details:string,summer:string){
        this.toast.error({detail:details,summary:summer,position:'br',duration:5000}),{
            enableHtml :  true
        };
    }
    openInfo(details:string,summer:string){
        this.toast.info({detail:details,summary:summer,position:'br',duration:5000}),{
            enableHtml :  true
        };
    }
}
