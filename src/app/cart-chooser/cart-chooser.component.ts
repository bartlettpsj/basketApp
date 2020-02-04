import { Component, OnInit } from '@angular/core';
import {Basket, DataService} from '../data.service';

@Component({
  selector: 'app-cart-chooser',
  templateUrl: './cart-chooser.component.html',
  styleUrls: ['./cart-chooser.component.scss']
})
export class CartChooserComponent implements OnInit {

  private baskets: Basket[];
  basketNames: string[];
  basket: Basket;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    // this.baskets = this.dataService.getAllBaskets();
    // console.log('Baskets', this.baskets);
    this.basketNames = this.dataService.getBasketNames();
    // console.log('Name:', this.basketNames);
    // console.log('Basket 1 is: ', this.dataService.getBasketByName('Basket 1'));
    // Start with the first Basket
    // this.basket = this.dataService.getBasketByName(this.basketNames[0]);
  }

  changeBasket(event) {
    console.log('On change basket event', event.target.value);
    this.basket = this.dataService.getBasketByName(event.target.value);
    console.log('Got basket', this.basket);
  }

}
