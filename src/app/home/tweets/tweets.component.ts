import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { CommentsService } from '../services/comments.service';
import { ToastService } from '../../core/toast.service';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  postTweetForm: FormGroup;
  tweets = [];
  replySubscription;

  constructor(
    private fb: FormBuilder,
    private posts: PostsService,
    private toast: ToastService,
    private comments: CommentsService
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
    this.posts.addPost(formValue).subscribe(
      data => {
        this.toast.success('Your tweet will be posted');
      },
      err => {

      }
    )
  }

  showCommentModal(tweet) {
    this.comments.showCommentModal(tweet);
    this.addReplyListener();
  }

  addReplyListener() {
    this.replySubscription = this.comments.onSendReply.skip(1).subscribe(result => {
      this.posts.addReply(result).subscribe(
        data => {
          this.comments.hideCommentModal();
          this.replySubscription.unsubscribe();
          this.toast.success('Your reply will be sent');
        },
        err => {}
      )
    })
  }

  likeTweet(tweetId) {
    this.posts.like(tweetId).subscribe(
      data => {
        this.toast.success('This tweet will be liked')
      },
      err => {

      }
    )
  }

}
