import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public afAuth: AngularFireAuth){

  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>  {

      return new Promise((resolve, reject) => {
        this.afAuth.onAuthStateChanged((user:any) => {
            if (user) {

                // if (!user.emailVerified)                            // if the user hasn't verified their email, send them to that page
                //     this.router.navigate(['/verify-email']);

                resolve(true);
            } else {
                console.log('Auth Guard: user is not logged in');
                this.router.navigate(['/home']);                   // a logged out user will always be sent to home
                resolve(false);
            }
        });
    });

  }
  
}
