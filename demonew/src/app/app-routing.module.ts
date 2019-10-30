import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [

  {
    path: 'products',
    component: ProductsComponent,
    // children:[
    //   {path: ':id',
    // component: ProductEditComponent}
    // ]
  },
{
  path: 'product/:id',
  component: ProductEditComponent
},

  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'shipping',
    component: ShippingAddressComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: '**',
    component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutes = [
  ProductsComponent, ProductEditComponent, ShoppingCartComponent, 
  HeaderComponent, ShippingAddressComponent, AuthComponent
]
