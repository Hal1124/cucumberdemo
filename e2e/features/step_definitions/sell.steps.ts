import { defineSupportCode } from 'cucumber';
import { expect } from 'chai';
import { SellPage } from '../pages/sell.page';

defineSupportCode(function ({ Given, Then, When, Before }) {
  let page: SellPage;
  Before(() => {
    page = new SellPage();
  });

  Given('小明去到夜市擺攤', async function () {
    await page.navigateTo();
  });

  Given('要賣的商品售價{string}元', async function (price) {
    // Write code here that turns the phrase above into concrete actions
    await page.setGoodsPrice(price);
  });

  Given('客人買{string}樣商品', async function (qty) {
    // Write code here that turns the phrase above into concrete actions
    await page.setSellGoods(qty);
  });

  Given('使用{string}元鈔票付款', async function (paymoney) {
    // Write code here that turns the phrase above into concrete actions
    await page.setPaymoney(paymoney);
  });

  When('小明收下客人的鈔票', async function () {
    // Write code here that turns the phrase above into concrete actions
    await page.clickButton();
  });
  Then('小明要找零{string}元', async function (balance) {
    // Write code here that turns the phrase above into concrete actions
    let actual = await page.getBalance();

    expect(actual).to.equal(balance);
  });
});
