import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Ngx Hacker News';
  constructor() {
  }

  public scrollTop() {
    window.scrollTo(0, 0);
  }
}
