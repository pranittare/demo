import { Injectable } from '@angular/core';
import { Product } from './products.model';
import { Shopping } from '../shopping-cart/shopping.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products: Product[] =[
    new Product(
      'Red Dress',
      'A very Long dress - one piece!!',
      'https://www.publicdomainpictures.net/pictures/280000/nahled/vintage-victorian-dress-antique.jpg',
      [
        new Shopping('Fine Dress Material',
         10 ,
          '10 mtrs is enough cloth to cover everything')
      ]
    ),
    new Product(
      'Rose Red Dress',
      'Dress Like A Rose - Intermediate Level',
      'https://live.staticflickr.com/8015/7570181548_b64dc5f35e_b.jpg',
      [
        new Shopping('Marterial Like Rose petals',
        15,
        '15 meteres Should be able to do the trick')
      ]
    )
  ]
  constructor() { }
  getProducts(index: number) {
    return this.products.slice();
  }
  getProduct(index: number) {
    return this.products[index];
  }
}
