import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { Story } from '../core/data/models/story';
import { HackerNewsAPIService } from '../core/data/services/hackernews-api.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  sub: Subscription;
  item: Story;
  errorMessage = '';

  constructor(
    private _hackerNewsAPIService: HackerNewsAPIService,
    private route: ActivatedRoute,
    private _location: Location
  ) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const itemID = +params['id'];
      this._hackerNewsAPIService.fetchItemContent(itemID).subscribe(item => {
        this.item = item;
      }, error => this.errorMessage = 'Could not load item comments.');
    });
    window.scrollTo(0, 0);
  }

  goBack() {
    this._location.back();
  }

  get hasUrl(): boolean {
    return this.item.url.indexOf('http') === 0;
  }

}
