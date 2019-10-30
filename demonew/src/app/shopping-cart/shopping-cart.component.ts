import { Component, OnInit } from '@angular/core';
import { Shopping } from './shopping.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private  shoppings: Shopping[] = [
    new Shopping('Apples', 5 ,'Cras sit amet nibh libero gravida nulla', 
    'https://icon-library.net/images/facebook-icon-40x40/facebook-icon-40x40-2.jpg'),
new Shopping('Tomatoes', 10, 'Nulla vel metus scelerisque ante sollicitudin Cras purus odiovestibulum vulputate at',
 'https://icon-library.net/images/facebook-icon-40x40/facebook-icon-40x40-21.jpg'),
  ];
  startedEditing = new Subject<number>();

  // shopping: Shopping[];
  constructor() { }

  ngOnInit() {
  }
  onEditItem(index: number) {
    this.startedEditing.next(index);
  }
  onDelete(index: number) {
    if(index !== -1) {
      this.shoppings.splice(index, 1)

    }
  }
  handelClick($event) {
    console.log($event)
  }
  doubleClick(index: number): void {
    this.onDelete(index)
  }
}
