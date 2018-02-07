import { defineSupportCode } from 'cucumber';
import { expect } from 'chai';
import { ShoppingPage } from '../pages/shopping.page';

defineSupportCode(function({ Given, Then, When, Before }) {
  let page: ShoppingPage;
  Before(() => {
    page = new ShoppingPage();
  });

  Given('媽媽給了小明{string}元', async function (money) {
    // Write code here that turns the phrase above into concrete actions
    await page.navigateTo();
    await page.setInitmoney(money);
  });

  Given('小明買高麗菜需要{string}元', async function (cabbage) {
    // Write code here that turns the phrase above into concrete actions
    await page.buyCabbage(cabbage);
  });

  Given('小明買蘋果需要{string}元', async function (apple) {
    // Write code here that turns the phrase above into concrete actions
    await page.buyApple(apple);
  });

  Given('有使用折價卷', async function () {
    // Write code here that turns the phrase above into concrete actions
    await page.setCoupon("true");
  });

  When('小明去結帳', async function () {
    // Write code here that turns the phrase above into concrete actions
    await page.clickButton();
  });
  Then('小明剩下{string}元', async function (balance) {
    // Write code here that turns the phrase above into concrete actions
    let actual = await page.getBalance();

    expect(actual).to.equal(balance);
  });

});
