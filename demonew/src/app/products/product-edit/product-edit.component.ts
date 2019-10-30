import { Component, OnInit, Input } from '@angular/core';
import { Shopping } from 'src/app/shopping-cart/shopping.model';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products: Product[];
@Input()index: number;

  private shop: Shopping[] = [
    new Shopping('Fine Dress Material',
    10 ,
     '10 mtrs is enough cloth to cover everything'),
    new Shopping(
      'Marterial Like Rose petals',
        15,
        '15 meteres Should be able to do the trick'
    )
  ]
  id: number;
  constructor(private productService: ProductsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    // this.route.params.subscribe(
    //   (params: Params) =>{
    //     this.id = +params.get['id'];
    //     console.log(params);
    //     // this.product = this.productService.getProduct(this.id);
    // this.products = this.productService.getProduct(this.id);
    //   })
    this.route.paramMap
    .subscribe(prams => {
      this.id = +prams.get(':id')
      console.log(prams);
      console.log(this.id);
      this.products = this.productService.getProducts(this.id)
    })

  }
  onSelect(product) {
    console.log(product.shopping[0].name,
      product.shopping[0].description,
      product.shopping[0].amount )
  }
  // getShop() {
  //   return this.shop.slice();
   }

