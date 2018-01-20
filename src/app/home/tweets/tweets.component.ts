import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  postTweetForm: FormGroup;
  tweets = [];

  constructor(
    private fb: FormBuilder,
    private posts: PostsService
  ) {
      this.postTweetForm = fb.group({
        'text' : [null, Validators.required],
      })
    }

  ngOnInit() {
    this.posts.getPosts().subscribe(
      data => {
        this.tweets = data.posts;
      },
      err => {}
    )
  }

  postTweet(formValue) {
    console.log(formValue)
  }

}
