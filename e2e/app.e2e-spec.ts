import { BoringToDoListPage } from './app.po';

describe('boring-to-do-list App', function() {
  let page: BoringToDoListPage;

  beforeEach(() => {
    page = new BoringToDoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
