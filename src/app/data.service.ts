import { Injectable } from '@angular/core';
import baskets from './data/basket.json';
import taxRules from './data/tax-rules.json';
import { map, find } from 'lodash';

export interface Basket {
  name: string,
  items: Item[];
}

export interface Item {
  qty: number;
  title: string;
  price: number;
  category: string; // need to make enum
  imported?: boolean;
  image: string;
}

export interface TaxRule {
  name: string;
  rate: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAllBaskets(): Basket[] {
    return baskets;
  }

  getBasketNames(): string[] {
    return map(baskets, basket => basket.name);
  }

  getBasketByName(name): Basket {
    return find(baskets, basket => basket.name === name);
  }

  getTaxRules() {
    return taxRules;
  }
}
