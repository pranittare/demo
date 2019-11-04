import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/products.model';
import { Shopping } from '../shopping-cart/shopping.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private productsService: ProductsService) { }

  storeProducts() {
    const products = this.productsService.getProducts();
    this.http.put('https://just-chat-6ecf7.firebaseio.com/products.json', products)
    .subscribe(response =>{
      console.log(response);
    })
  }
  fetchProducts() {
    this.http.get<Product[]>('https://just-chat-6ecf7.firebaseio.com/products.json')
    .subscribe(products =>{
      this.productsService.setProducts(products)
    })
  }
  

  storeshoppings() {
    const shoppings = this.productsService.getShoppings();
    this.http.put('https://just-chat-6ecf7.firebaseio.com/products/0/shopping.json', shoppings)
    .subscribe(response =>{
      console.log(response);
    })
  }
  fetchShoppings(id: number) {
    this.http.get<Shopping[]>(`https://just-chat-6ecf7.firebaseio.com/products/${id}/shopping.json`)
    .subscribe(shoppings =>{
      this.productsService.setShoppings(shoppings);
    })
  }
}
