import { TestBed, inject } from '@angular/core/testing';

import { ShoppingService } from './shopping.service';

describe('ShoppingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingService]
    });
  });

  it('媽媽給小明 100 元菜錢，買高麗菜 50 元及蘋果 30 元，需要找零錢 20 元給媽媽', inject([ShoppingService], (service: ShoppingService) => {
    // Arrange
    const money = 100;
    const cabbage = 50;
    const apple = 30;
    const iscoupon = false;
    const expected = 20;
    let actual = 0;

    // Act
    actual = service.payment(money, cabbage, apple, false);

    // Assert
    expect(actual).toEqual(expected);
  }));

  it('媽媽給小明 100 元菜錢，買高麗菜 50 元及蘋果 30 元，還給了小明 20 元折價卷，需要找零錢 40 元給媽媽', inject([ShoppingService], (service: ShoppingService) => {
    // Arrange
    const money = 100;
    const cabbage = 50;
    const apple = 30;
    const iscoupon = true;
    const expected = 40;
    let actual = 0;

    // Act
    actual = service.payment(money, cabbage, apple, true);

    // Assert
    expect(actual).toEqual(expected);
  }));
});
