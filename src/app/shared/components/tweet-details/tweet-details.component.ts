import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.scss']
})
export class TweetDetailsComponent implements OnInit {

  tweet: object;

  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.tweet = this.bsModalRef.content.tweet;
    }, 0);
  }

}
