import { WeatherProjectPage } from './app.po';

describe('weather-project App', () => {
  let page: WeatherProjectPage;

  beforeEach(() => {
    page = new WeatherProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
