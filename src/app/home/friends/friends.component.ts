import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friendsList = [];

  constructor(private friends: FriendsService) { }

  ngOnInit() {
    this.friends.getFriends().subscribe(
      data => {
        this.friendsList = data.users;
      },
      err => {}
    )
  }

}
