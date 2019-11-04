import { Injectable } from '@angular/core';
import { Product } from './products.model';
import { Shopping } from '../shopping-cart/shopping.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsChanged = new Subject<Product[]>();
  shoppingChanged = new Subject<Shopping[]>();
  private shoppings: Shopping[] = [
    new Shopping(1,
      'Fine Dress Material',
     10 ,
      '10 mtrs is enough cloth to cover everything'),
      new Shopping(2,
        'Marterial Like Rose petals',
      15,
      '15 meteres Should be able to do the trick')
  ]
  public products: Product[]
  //  =[
  //   new Product(
  //     1,
  //     'Red Dress',
  //     'A very Long dress - one piece!!',
  //     'https://www.publicdomainpictures.net/pictures/280000/nahled/vintage-victorian-dress-antique.jpg',
  //     [
        
  //       new Shopping(1,
  //         'Fine Dress Material',
  //        10 ,
  //         '10 mtrs is enough cloth to cover everything')
  //     ]
  //   ),
  //   new Product(
  //     2,
  //     'Rose Red Dress',
  //     'Dress Like A Rose - Intermediate Level',
  //     'https://live.staticflickr.com/8015/7570181548_b64dc5f35e_b.jpg',
  //     [
  //       new Shopping(2,
  //         'Marterial Like Rose petals',
  //       15,
  //       '15 meteres Should be able to do the trick')
  //     ]
  //   )
  // ]
  constructor() { }
  getProducts() {
    return this.products.slice();

  }
  getProduct(index: number) {
    return this.getProducts[index];

  }
  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }
  // for ShoppingList
  getShoppings() {
    return this.shoppings.slice();

  }
  getShopping(index: number) {
    return this.getShoppings[index];

  }
  setShoppings(shoppings: Shopping[]) {
    this.shoppings = this.shoppings;
    this.shoppingChanged.next(this.shoppings.slice());
  }
}
