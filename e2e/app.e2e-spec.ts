import { MarsStarterV04Page } from './app.po';

describe('mars-starter-v04 App', function() {
  let page: MarsStarterV04Page;

  beforeEach(() => {
    page = new MarsStarterV04Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
