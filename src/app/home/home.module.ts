import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { homeRouter } from './home.router';
import { SharedModule } from '../shared/shared.module';
import { TweetsComponent } from './tweets/tweets.component';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  imports: [
    SharedModule,
    homeRouter
  ],
  declarations: [HomeComponent, TweetsComponent, FriendsComponent]
})
export class HomeModule { }
