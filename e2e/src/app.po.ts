import { $, browser } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  async getWidgetInfo(id: string) {
    return {
      title: await $(`#${id} po-widget .po-widget-header`).getText()
    };
  }
}
