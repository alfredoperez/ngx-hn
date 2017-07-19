import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerNewsAPIService } from './data/services/hackernews-api.service';

const SERVICES = [HackerNewsAPIService]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule {  static forRoot() {
  return {
    ngModule: CoreModule,
    providers: [...SERVICES  ]
  }
}}
