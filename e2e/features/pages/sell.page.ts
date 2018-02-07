import { browser, by, element } from 'protractor';

export class SellPage {

  navigateTo() {
    return browser.get('/sell');
  }

  async setGoodsPrice(price) {
    await element(by.css("input#price")).clear();
    await element(by.css("input#price")).sendKeys(price);
  }

  async setSellGoods(qty) {
    await element(by.css("input#qty")).clear();
    await element(by.css("input#qty")).sendKeys(qty);
  }

  async setPaymoney(paymoney) {
    await element(by.css("input#paymoney")).clear();
    await element(by.css("input#paymoney")).sendKeys(paymoney);
  }

  async clickButton() {
    await element(by.css("button#incomebut")).click();
  }
  async getBalance() {
    return await element(by.css('span#balance')).getText();
  }
}
