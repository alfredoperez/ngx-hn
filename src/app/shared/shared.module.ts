import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { CommentPipe } from './pipes/comment.pipe';
import { PointPipe } from './pipes/point.pipe';

const COMPONENTS = [ErrorMessageComponent];
const PIPES = [CommentPipe, PointPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES
  ]
})
export class SharedModule {
}
