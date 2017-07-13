import { ComponentsAndDatabindingAssignmentPage } from './app.po';

describe('components-and-databinding-assignment App', () => {
  let page: ComponentsAndDatabindingAssignmentPage;

  beforeEach(() => {
    page = new ComponentsAndDatabindingAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
