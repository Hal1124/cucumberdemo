import { browser, by, element } from 'protractor';

export class ShoppingPage {

  navigateTo() {
    return browser.get('/');
  }

  async  setInitmoney(money) {
    await element(by.css("input#money")).clear();
    await element(by.css("input#money")).sendKeys(money);
  }
  async buyCabbage(price){
    await element(by.css("input#cabbage")).clear();
    await element(by.css("input#cabbage")).sendKeys(price);
  }
  async buyApple(price){
    await element(by.css("input#apple")).clear();
    await element(by.css("input#apple")).sendKeys(price);
  }

  async setCoupon(iscoupon:string){
    await element(by.css(`option[value=${iscoupon}]`)).click();
  }

  async clickButton() {
    await element(by.css("button#paymentbut")).click();
  }

  async getBalance(){
    return await element(by.css('span#balance')).getText();
  }
}
