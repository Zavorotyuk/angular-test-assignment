import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap';
import { CommentModalComponent } from './components/comment-modal/comment-modal.component';


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
  declarations: [CommentModalComponent],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BsDropdownModule, TooltipModule, ModalModule, CollapseModule
  ],
  entryComponents: [CommentModalComponent]
})
export class SharedModule { }
