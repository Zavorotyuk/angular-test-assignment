import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor() { }

  signin(userData) {
    const signinObservable = new Observable((observer) => {
      observer.next({'success': true})
      observer.complete()
    })
    return signinObservable;
  }

  signup(userData) {
    const signupObservable = new Observable((observer) => {
      observer.next({'success': true})
      observer.complete()
    })
    return signupObservable;
  }

}
