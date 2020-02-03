import { Component, OnInit } from '@angular/core';
import {Basket, DataService} from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  // private baskets: Basket[];
  //
  constructor(public dataService: DataService) { }

  ngOnInit() {
    // this.baskets = this.dataService.getAllBaskets();
    // console.log('Baskets', this.baskets);
    // console.log('Name:', this.dataService.getBasketNames());
    // console.log('Basket 1 is: ', this.dataService.getBasketByName('Basket 1'));
  }

}
