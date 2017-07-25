import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './item-details.component';
import { CommentComponent } from './comment/comment.component';
import { SharedModule } from '../shared/shared.module';



const routes: Routes = [
  {
    path: ':id',
    component: ItemDetailsComponent
  }
]

@NgModule({
  imports: [ SharedModule, CommonModule, RouterModule, RouterModule.forChild(routes) ],
  declarations: [ ItemDetailsComponent, CommentComponent ],
  exports: [ ItemDetailsComponent, RouterModule]
})
export class ItemDetailsModule {}
