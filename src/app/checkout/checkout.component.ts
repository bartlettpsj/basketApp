import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Basket} from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  basket: Basket;

  constructor(public router: Router) { }

  ngOnInit() {
    this.basket = window.history.state;
  }

}
