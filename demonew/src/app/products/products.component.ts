import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from './products.model'
import { ProductsService } from './products.service';
import { Shopping } from '../shopping-cart/shopping.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
// @Input()product: Product;
products: Product[];
shoppings: Shopping[]
subscription: Subscription
// products$;

@Input()index: number;
  id: number;
  constructor(private productService: ProductsService, 
    private router: Router,
    private route: ActivatedRoute, db: AngularFireDatabase,
    private datastorageservice: DataStorageService) {  
      // this.products$ = db.object('/products/Red%20Dress').valueChanges().subscribe();
    }

  ngOnInit() {
    this.subscription =this.productService.productsChanged
    .subscribe((products: Product[]) =>{
      this.products = products;
    })
    // this.productService.getProducts();
    this.datastorageservice.fetchProducts()

  
  }
  // getProducts() {
  //   this.datastorageservice.fetchProducts()
  // }
  
  onSelect(product) {
    // console.log(product.shopping[0].name,
    //   product.shopping[0].description,
    //   product.shopping[0].amount,
    //   product.shopping[0].id,
    //   product
    //    ),
    console.log(product.shoppings[0].id);
    console.log(product.shoppings)
      // this.router.navigate([':id'],{relativeTo: this.route});
      // this.router.navigate(['product/:id']),
      // this.router.navigate([`product/${product.shopping[0].id}`])
      this.router.navigate([`product/${product.shoppings[0].id}`])
      // this.router.navigate([`product/product.shoppings.id`])


    this.shoppings = this.productService.getShopping(this.index)

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
