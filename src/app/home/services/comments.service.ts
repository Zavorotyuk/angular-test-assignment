import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CommentModalComponent } from '../../shared/components/comment-modal/comment-modal.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/skip';

@Injectable()
export class CommentsService {

  onSendReply: BehaviorSubject<object>;
  bsModalRef;
  onSaveSubscription;

  constructor(
    private modalService: BsModalService
  ) {
      this.onSendReply = new BehaviorSubject(null);
    }

  showCommentModal(tweet) {
    this.bsModalRef = this.modalService.show(CommentModalComponent, { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false });
    this.bsModalRef.content.tweet = tweet;
    this.bsModalRef.content.onSave.skip(1).subscribe(result => {
      console.log('in service')
      this.onSendReply.next(result);
    })
  }

  hideCommentModal() {
    this.bsModalRef.hide();
  }


}
