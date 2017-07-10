import { ComponentsAndDatabindingPage } from './app.po';

describe('components-and-databinding App', function() {
  let page: ComponentsAndDatabindingPage;

  beforeEach(() => {
    page = new ComponentsAndDatabindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
