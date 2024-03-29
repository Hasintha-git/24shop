import {Injectable, NgZone} from '@angular/core';
import {NgToastService} from 'ng-angular-popup';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from '@angular/router';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import {Toast} from '../../services/toast'
import {CrudService} from 'src/app/services/User/crud.service';
import {from, switchMap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private notification: Toast, private toast: NgToastService, private fireauth: AngularFireAuth, private router: Router, public ngZone: NgZone, private userSave: CrudService) {

  }

  async login(email: string, password: string):Promise<any> {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(result => {
      this.ngZone.run(() => {
        return result
      });

    }).catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;

      switch (errorCode) {
        case 'auth/wrong-password':
          this.notification.openError("The password is Wrong","Try again")
          return "The password is Wrong";
        case 'auth/user-not-found':
          this.notification.openError("User not found","wrong gmail")
          return 'User not found';
        case 'auth/user-disabled':
           this.notification.openInfo("Sorry your user is disabled","Need new register")
          return 'Sorry your user is disabled.';
        default:
          this.notification.openWarning("Login error try again later","Try again")
          return 'Login error try again later.';
      }

      });
  }

  register(email:string,password:string) {
    const auth = getAuth();
    return from(
      createUserWithEmailAndPassword(auth,email,password)
      );
  }

  signinWIthGoogle() {

    const auth = getAuth();
    return from(signInWithPopup(auth,new GoogleAuthProvider())
    )
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('user');
      // this.openSuccess()
      this.router.navigate(['/home']);
    }).catch((error: any) => {
      const errorCode = error.code;
      const errorMsg = error.message;
    })
  }

  setUserLoggedIn(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  async errorHandling(errorCode:string):Promise<any>{

  }

  getUserData(){
    let userData =sessionStorage.getItem('user')
    if(userData){
      return JSON.parse(userData)
    }else{
      return null;
    }
  }
}
