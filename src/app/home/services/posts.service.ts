import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get("./assets/mock/posts.json")
  }

  addPost(data): Observable<any> {
    const addPostObservable = new Observable((observer) => {
      observer.next({'success': true})
      observer.complete()
    })
    return addPostObservable;
  }

  addReply(data): Observable<any> {
    const addReplyObservable = new Observable((observer) => {
      observer.next({'success': true})
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

}
