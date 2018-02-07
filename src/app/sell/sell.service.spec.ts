import { TestBed, inject } from '@angular/core/testing';

import { SellService } from './sell.service';

describe('SellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellService]
    });
  });

  it('should be created', inject([SellService], (service: SellService) => {
    expect(service).toBeTruthy();
  }));

  it('小明在夜市擺攤商品售價 200 元，客人買了2樣商品，使用 1000 元鈔票付款 ，小明要找零 600 元', inject([SellService], (service: SellService) => {
    // Arrange
    const paymoney = 1000;
    const price = 200;
    const qty = 2;
    const expected = 600;
    let actual = 0;

    // Act
    actual = service.income(paymoney,price, qty);

    // Assert
    expect(actual).toEqual(expected);
  }));
});
