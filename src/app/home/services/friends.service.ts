import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FriendsService {

  constructor(private http: HttpClient) { }

  getFriends(): Observable<any> {
    const friendFromStorage = this.getFriendsFromStorage();
    if(!friendFromStorage) {
      return this.http.get("./assets/mock/users.json")
    } else {
      const friendsObservable = new Observable((observer) => {
        observer.next(friendFromStorage);
        observer.complete()
      })
      return friendsObservable;
    }
  }

  followUser(user): Observable<any> {
    let friends = this.getFriendsFromStorage();
    const foundIndex = friends.users.findIndex(item => item.id === user.id);
    friends.users[foundIndex]['isFollowedByMe'] = true;
    this.saveFriendsInStorage(friends);
    const followObservable = new Observable((observer) => {
      observer.next(friends)
      observer.complete()
    })
    return followObservable;
  }

  unfollowUser(user): Observable<any> {
    let friends = this.getFriendsFromStorage();
    const foundIndex = friends.users.findIndex(item => item.id === user.id);
    friends.users[foundIndex]['isFollowedByMe'] = false;
    this.saveFriendsInStorage(friends);
    const unfollowObservable = new Observable((observer) => {
      observer.next(friends)
      observer.complete()
    })
    return unfollowObservable;
  }

  getFriendsFromStorage() {
    return JSON.parse(localStorage.getItem('friends')) || null;
  }

  saveFriendsInStorage(data) {
    localStorage.setItem('friends', JSON.stringify(data));
  }


}
