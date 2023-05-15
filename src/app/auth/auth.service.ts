import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from "rxjs";
import { map, tap } from "rxjs/operators";

import { User } from "./user.model";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private _user = new BehaviorSubject<User | null>(null);
  firebaseAPIKey = 'AIzaSyBDMZbLlmgDMk1oYnEo5j7xxOSy9on8RT0';

  get userIsAuthenticated(){
    return this._user.asObservable().pipe(map(user => {
      if(user) {
        return !!user.token;
      } else {
        return false;
      }
    }));
  }

  get userId(){
    return this._user.asObservable().pipe(map(user => {
      if(user){
        return user.id;
      } else {
        return null;
      }
    }));
  }

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${
        this.firebaseAPIKey
      }`,
      { email: email, password: password, returnSecureToken: true }
    ).pipe(tap(this.setUserData.bind(this)));
  }

  login(email: string, password: string) {
    console.log('2 - Authenticating!');
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${
          this.firebaseAPIKey
        }`,
        { email: email, password: password }
      )
      .pipe(tap(this.setUserData.bind(this)));
  }

  logout() {
    this._user.next(null);
  }

  private setUserData(userData: AuthResponseData){
    const exTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000));
    console.log("ExTime: " + exTime);
    this._user.next(new User(userData.localId, userData.email, userData.idToken, exTime));
  }
}
