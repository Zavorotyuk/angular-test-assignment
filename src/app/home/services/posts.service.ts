import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    const tweetsFromStorage = this.getTweetsFromStorage();
    if(!tweetsFromStorage) {
      return this.http.get("./assets/mock/posts.json")
    } else {
      const tweetsObservable = new Observable((observer) => {
        observer.next(tweetsFromStorage);
        observer.complete()
      })
      return tweetsObservable;
    }
  }

  addPost(data): Observable<any> {
    const addPostObservable = new Observable((observer) => {
      observer.next({'success': true})
      observer.complete()
    })
    return addPostObservable;
  }

  addReply(data): Observable<any> {
    let tweets = this.getTweetsFromStorage();
    const foundIndex = tweets.posts.findIndex(item => item.id === data.tweetId);
    tweets.posts[foundIndex]['comments'].push(data.reply)
    this.saveTweetsInStorage(tweets);
    const addReplyObservable = new Observable((observer) => {
      observer.next(tweets)
      observer.complete()
    })
    return addReplyObservable;
  }

  like(postId): Observable<any> {
    const likeObservable = new Observable((observer) => {
      observer.next({'success': true})
      observer.complete()
    })
    return likeObservable;
  }

  getTweetsFromStorage() {
    return JSON.parse(localStorage.getItem('tweets')) || null;
  }

  saveTweetsInStorage(data) {
    localStorage.setItem('tweets', JSON.stringify(data));
  }

}
