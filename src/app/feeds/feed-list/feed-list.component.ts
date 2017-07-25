import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsAPIService } from '../../core/data/services/hackernews-api.service';
import { Story } from '../../core/data/models/story';

@Component({
  moduleId: module.id,
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})

export class FeedListComponent implements OnInit {
  public typeSub: Subscription;
  public pageSub: Subscription;
  public items: Story[];
  public feedType: string;
  public pageNum: number;
  public listStart: number;
  public errorMessage = '';

  constructor(private _hackerNewsAPIService: HackerNewsAPIService,
              private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.typeSub = this.route
      .data
      .subscribe(data => {
        this.feedType = (data as any).feedType;
      });

    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = params['page'] ? +params['page'] : 1;
      this._hackerNewsAPIService.fetchFeed(this.feedType, this.pageNum)

        .subscribe(
          items => this.items = items,
          error => this.errorMessage = 'Could not load ' + this.feedType + ' stories.',
          () => {
            this.listStart = ((this.pageNum - 1) * 30) + 1;
            let counter = 0;
            this.items.forEach(item => {
              item.index = this.listStart + counter++;
            })
            window.scrollTo(0, 0);
          }
        )

    });
  }

  public trackByFn(_: number, item: any): number {
    return item.id;
  }
}
