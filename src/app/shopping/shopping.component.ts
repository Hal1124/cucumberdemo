import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers: [ShoppingService]
})
export class ShoppingComponent implements OnInit {

  money = 0;
  cabbage = 0;
  apple = 0;
  iscoupon = false;
  balance = 0;

  ngOnInit() {
  }

  payment() {
    this.balance = this.money - this.cabbage - this.apple;
    if (this.iscoupon) {
      this.balance += 20;
    }
  }

  // payment() {
  //   this.balance = this.shoppingService.payment(this.money, this.cabbage, this.apple, this.iscoupon);
  // }

  constructor(private shoppingService: ShoppingService) { }

}
