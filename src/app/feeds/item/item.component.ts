import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../../core/data/models/story';

@Component({
  moduleId: module.id,
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Story;

  constructor() {
  }

  ngOnInit() {
  }

  get hasUrl(): boolean {
    return this.item.url.indexOf('http') === 0;
  }

}
