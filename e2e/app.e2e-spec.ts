import { FotofotoPage } from './app.po';

describe('fotofoto App', function() {
  let page: FotofotoPage;

  beforeEach(() => {
    page = new FotofotoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
