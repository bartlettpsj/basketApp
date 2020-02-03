import {Component, Input, OnInit} from '@angular/core';
import {Basket, DataService} from '../data.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() basket: Basket;

  // private baskets: Basket[];
  // basketNames: string[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    // this.baskets = this.dataService.getAllBaskets();
    // console.log('Baskets', this.baskets);
    // this.basketNames = this.dataService.getBasketNames();
    // console.log('Name:', this.basketNames);
    // console.log('Basket 1 is: ', this.dataService.getBasketByName('Basket 1'));
    console.log('Basket Passed input', this.basket);
  }

  changeBasket(event) {
    console.log('On change basket event', event.target.value);
  }
}
