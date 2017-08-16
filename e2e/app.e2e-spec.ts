import { ClientTrackerPage } from './app.po';

describe('client-tracker App', function() {
  let page: ClientTrackerPage;

  beforeEach(() => {
    page = new ClientTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
