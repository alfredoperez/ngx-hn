import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeedListComponent } from './feeds/feed-list/feed-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list/news',
    pathMatch: 'full'
  },
  {
    path: 'list/:feedType',
    component: FeedListComponent
  },
  {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
  {path: 'item', loadChildren: 'app/item-details/item-details.module#ItemDetailsModule'},


];

@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent
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
