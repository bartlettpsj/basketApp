import {Component, Input, OnInit} from '@angular/core';
import {Basket, Item, DataService} from '../data.service';
import { get } from 'lodash';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() basket: Basket;

  private taxRules; //: TaxRule[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.taxRules = this.dataService.getTaxRules();
  }

  getFlags(item: Item) {
    const tax =  get(this.taxRules, item.category);
    const flag = `${item.category} sales tax applies at ${tax}%`;
    return flag + (item.imported ? ', import duty applicable' : '');
  }
}
