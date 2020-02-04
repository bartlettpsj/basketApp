import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Basket, DataService} from '../data.service';
import {CalcService, BasketCalculated} from '../calc.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  private basketCalculated: BasketCalculated;

  constructor(public calcService: CalcService) {
  }

  ngOnInit() {
    const basket = window.history.state;
    console.log('Basket in Checkout', basket.name);
    this.basketCalculated = this.calcService.calcBasket(basket);
    console.log('Calculated Basket', this.basketCalculated);

  }

}
