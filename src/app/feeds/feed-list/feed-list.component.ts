import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsAPIService } from '../../core/data/services/hackernews-api.service';
import { Story } from '../../core/data/models/story';
import {combineLatest} from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})

export class FeedListComponent implements OnInit {

  public items: Story[];
  public feedType: string;
  public pageNumber: number;
  public listStart: number;
  public errorMessage = '';

  constructor(private _hackerNewsAPIService: HackerNewsAPIService,
              private route: ActivatedRoute) {
  }

  public ngOnInit() {
    const obsComb = combineLatest(this.route.params,
        this.route.queryParams,
        (params, qparams) => ({params, qparams}));

    obsComb.subscribe(ap => {
      this.feedType = ap.params['feedType'];
      const page = ap.qparams['page'];
      this.pageNumber = page != null && parseInt(page) > 0
        ? parseInt(page, 10)
        : 1;

      this.getFeed();
    });


  }

  private getFeed() {
    this._hackerNewsAPIService.fetchFeed(this.feedType, this.pageNumber)

      .subscribe(
        items => this.items = items,
        error => this.errorMessage = 'Could not load ' + this.feedType + ' stories.',
        () => {
          this.listStart = ((this.pageNumber - 1) * 30) + 1;
          let counter = 0;
          this.items.forEach(item => {
            item.index = this.listStart + counter++;
          });
          window.scrollTo(0, 0);
        }
      )
   }
  get nextPage(): number {
    return this.items.length < 30 ? this.pageNumber : this.pageNumber + 1;
  }

  get prevPage(): number {
    return this.pageNumber > 1 ? this.pageNumber - 1 : 1;
  }
}
