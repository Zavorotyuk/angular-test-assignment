import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TweetDetailsComponent } from '../../shared/components/tweet-details/tweet-details.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/skip';

@Injectable()
export class TweetDetailsService {

  bsModalRef;

  constructor(
    private modalService: BsModalService
  ) {}

  showDetailsModal(tweet) {
    this.bsModalRef = this.modalService.show(TweetDetailsComponent, { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false });
    this.bsModalRef.content.tweet = tweet;
  }

  hideDetailsModal() {
    this.bsModalRef.hide();
  }


}
