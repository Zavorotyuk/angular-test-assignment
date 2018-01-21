import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss']
})
export class CommentModalComponent implements OnInit {

  replyForm: FormGroup;
  tweet: object;
  onSave: BehaviorSubject<object>;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
  ) {
      this.replyForm = fb.group({
        'text' : [null, Validators.required],
      })
    }

  ngOnInit() {
    setTimeout(() => {
      this.tweet = this.bsModalRef.content.tweet;
    }, 0);
    this.onSave = new BehaviorSubject(null);
  }

  sendReply(formValue) {
    this.onSave.next({reply: formValue, tweetId: this.tweet['id']});
  }


}
