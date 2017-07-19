import { NgxStarterPage } from './app.po';

describe('ngx-starter App', () => {
  let page: NgxStarterPage;

  beforeEach(() => {
    page = new NgxStarterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
