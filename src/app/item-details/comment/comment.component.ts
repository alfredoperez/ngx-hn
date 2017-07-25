import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../core/data/models/comment';

@Component({
  moduleId: module.id,
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  collapse: boolean;

  public constructor() {
  }

  public ngOnInit() {
    this.collapse = false;
  }
}
