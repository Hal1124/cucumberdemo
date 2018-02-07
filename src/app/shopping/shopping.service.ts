import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingService {

  constructor() { }
  payment(money: number, cabbage: number, apple: number, iscoupon: boolean): number {
    let balance = money - cabbage - apple;

    if (iscoupon) {
      balance += 20;
    }

    return balance;
  }
}
