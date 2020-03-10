import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('App', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display widget from module1', async () => {
    page.navigateTo();
    const widget1 = await page.getWidgetInfo('lib-module1');
    expect(widget1.title).toBe('Módulo Um');
  });

  it('should display widget from module2', async () => {
    page.navigateTo();
    const widget2 = await page.getWidgetInfo('lib-module2');
    expect(widget2.title).toBe('Módulo Dois');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
