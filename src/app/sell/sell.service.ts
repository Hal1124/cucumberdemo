import { Injectable } from '@angular/core';

@Injectable()
export class SellService {

  constructor() { }
  income(paymoney: number, price: number, qty: number): number {
    return paymoney - (price * qty);
  }
}
