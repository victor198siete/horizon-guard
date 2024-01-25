import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';

import { AuthResponseData, AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoading = false;
  isLogin? = true;

  authError = false;
  message: string = 'Could not sign you up, please try again.';

  task = signal<User[]>([]);

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  authenticate(email: string, password: string) {
    console.log('1 - Authenticating!');
    this.isLoading = true;
    // this.loadingCtrl
    //   .create({ keyboardClose: true, message: 'Logging in...' })
    //   .then(loadingEl => {
    //     loadingEl.present();
        let authObs: Observable<AuthResponseData>;
          if(this.isLogin) {
            authObs = this.authService.login(email, password);
          } else {
            authObs = this.authService.signup(email, password);
          }
        authObs.subscribe(
          resData => {
            console.log(resData);
            this.isLoading = false;
            // loadingEl.dismiss();
            this.router.navigateByUrl('/dash');
          },
          errRes => {
            // loadingEl.dismiss();
            const code = errRes.error.error.message;
            if (code === 'EMAIL_EXISTS') {
              this.message = 'This email address exists already!';
              console.log(this.message);
            } else if (code === 'EMAIL_NOT_FOUND') {
              this.message = 'Email Not Found';
              console.log(this.message);
            } else if ( code === 'INVALID_PASSWORD'){
              this.message = "This password is not correct!";
            }
            this.authError = true;
            setTimeout(()=> {
              this.authError = false
            },5000);
            // this.showAlert(message);
          }
        );
      }
      // );


      onSubmit(form: NgForm) {
        if (!form.valid) {
          return;
        }
        const email = form.value.email;
        const password = form.value.password;

        this.authenticate(email, password);
      }

      // private showAlert(message: string) {
      //   this.alertCtrl
      //     .create({
      //       header: 'Authentication failed',
      //       message: message,
      //       buttons: ['Okay']
      //     })
      //     .then(alertEl => alertEl.present());
      // }
  }

  // onSwitchAuthMode() {
  //   if(this.isLogin){
  //     return null
  //   }
  //   this.isLogin = !this.isLogin;
  // }



