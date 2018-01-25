import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap';
import { CommentModalComponent } from './components/comment-modal/comment-modal.component';
import { TweetDetailsComponent } from './components/tweet-details/tweet-details.component';


@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CommentModalComponent, TweetDetailsComponent],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BsDropdownModule, TooltipModule, ModalModule, CollapseModule
  ],
  entryComponents: [CommentModalComponent, TweetDetailsComponent]
})
export class SharedModule { }
