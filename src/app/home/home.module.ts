import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { homeRouter } from './home.router';
import { SharedModule } from '../shared/shared.module';
import { TweetsComponent } from './tweets/tweets.component';
import { FriendsComponent } from './friends/friends.component';
import { PostsService } from './services/posts.service';
import { FriendsService } from './services/friends.service';
import { CommentsService } from './services/comments.service';
import { TweetDetailsService } from './services/tweet-details.service';

@NgModule({
  imports: [
    SharedModule,
    homeRouter
  ],
  declarations: [HomeComponent, TweetsComponent, FriendsComponent],
  providers: [PostsService, FriendsService, CommentsService, TweetDetailsService]
})
export class HomeModule { }
