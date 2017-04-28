import { FootballClubsPage } from './app.po';

describe('football-clubs App', () => {
  let page: FootballClubsPage;

  beforeEach(() => {
    page = new FootballClubsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
