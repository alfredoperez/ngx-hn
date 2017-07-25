import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../../core/data/models/story';

@Component({
  moduleId: module.id,
  selector: 'ngx-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input() item: Story;

  public constructor() {
  }

  public ngOnInit() {
  }

  get hasUrl(): boolean {
    return this.item.url.indexOf('http') === 0;
  }

}
