
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TweetsComponent } from './tweets/tweets.component';
import { FriendsComponent } from './friends/friends.component';

export const HOME_ROUTER: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'tweets'
      },
      {
        path: 'tweets',
        component: TweetsComponent
      },
      {
        path: 'friends',
        component: FriendsComponent
      }
    ]
  }
]


export const homeRouter: ModuleWithProviders = RouterModule.forChild(HOME_ROUTER);
