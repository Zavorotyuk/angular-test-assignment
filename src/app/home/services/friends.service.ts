import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FriendsService {

  constructor(private http: HttpClient) { }

  getFriends(): Observable<any> {
    return this.http.get("./assets/mock/users.json")
  }
}
