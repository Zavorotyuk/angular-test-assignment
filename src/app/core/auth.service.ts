import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor() { }

  signin(userData) {
    const signinObservable = new Observable((observer) => {
      observer.next(userData)
      observer.complete()
    })
    return signinObservable;
  }

  signup(userData) {
    const user = Object.assign({}, userData);
    delete user['confirm-password'];
    const signupObservable = new Observable((observer) => {
      observer.next(user)
      observer.complete()
    })
    return signupObservable;
  }

  isAuthenticated() {
   const userData = this.getUserData();
   if(userData.user) return true;
   return false;
  }

  setUserData(data) {
    localStorage.setItem('auth', JSON.stringify({ user: data }));
  }

  getUserData() {
    const userData = JSON.parse(localStorage.getItem('auth'));
    return userData || {};
  }

}
