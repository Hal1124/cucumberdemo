import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  price = 0;
  qty = 0;
  paymoney = 0;
  balance = 0;

  income() {
    this.balance = this.paymoney - (this.price * this.qty);
  }

  constructor() { }

  ngOnInit() {
  }
}
