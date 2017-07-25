import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeedListComponent } from './feeds/feed-list/feed-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feeds/feed/feed.component';
import { SharedModule } from './shared/shared.module';

const feedRoutes = [{
  path: ':page',
  component: FeedListComponent
}];

const routes: Routes = [
  {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
  {path: 'item', loadChildren: 'app/item-details/item-details.module#ItemDetailsModule'},
  {path: '', redirectTo: 'news/1', pathMatch: 'full'},
  {
    path: 'news',
    children: feedRoutes,
    data: {feedType: 'news'}
  },
  {
    path: 'newest',
    children: feedRoutes,
    data: {feedType: 'newest'}
  },
  {
    path: 'show',
    children: feedRoutes,
    data: {feedType: 'show'}
  },
  {
    path: 'ask',
    children: feedRoutes,
    data: {feedType: 'ask'}
  },
  {
    path: 'jobs',
    children: feedRoutes,
    data: {feedType: 'jobs'}
  }

];

@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngx-starter'}),
    NoopAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    SharedModule,
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
