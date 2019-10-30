import { Component, OnInit, Input } from '@angular/core';
import { Product } from './products.model'
import { ProductsService } from './products.service';
import { Shopping } from '../shopping-cart/shopping.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
// @Input()product: Product;
products: Product[]
shopping: Shopping[]

@Input()index: number;
  constructor(private productService: ProductsService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
   this.products = this.productService.getProducts(this.index);
  }
  
  onSelect(product) {
    console.log(product.shopping[0].name,
      product.shopping[0].description,
      product.shopping[0].amount )
      // this.router.navigate([':id'],{relativeTo: this.route});
      this.router.navigate(['product/:id'])
  }
}
