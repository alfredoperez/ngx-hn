import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: ':id',
    component: UserComponent
  }
]


@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [UserComponent],
  exports: [UserComponent, RouterModule]
})
export class UserModule {
}
