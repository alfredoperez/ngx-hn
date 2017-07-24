import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { HackerNewsAPIService } from '../core/data/services/hackernews-api.service';
import { User } from '../core/data/models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  sub: Subscription;
  user: User;
  errorMessage = '';

  constructor(private _hackerNewsAPIService: HackerNewsAPIService,
              private route: ActivatedRoute,
              private _location: Location) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const userID = params['id'];
      this._hackerNewsAPIService.fetchUser(userID)
        .subscribe(data => {
          this.user = data;
        }, error => this.errorMessage = 'Could not load user ' + userID + '.');
    });
  }

  goBack() {
    this._location.back();
  }
}
