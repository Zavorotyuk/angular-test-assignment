import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../services/friends.service';
import { ToastService } from '../../core/toast.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friendsList = [];

  constructor(
    private friends: FriendsService,
    private toast: ToastService,
  ) { }

  ngOnInit() {
    this.friends.getFriends().subscribe(
      data => {
        this.friendsList = data.users;
      },
      err => {}
    )
  }

  followUser(user) {
    this.friends.followUser(user).subscribe(
      data => {
        this.toast.success('This user will be followed')
      },
      err => {

      }
    )
  }

}
