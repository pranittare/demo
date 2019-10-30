import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {
  isLoggedIn = true; 
  constructor() { }

  ngOnInit() {
  }
  onSwitchMode() {
    this.isLoggedIn =!this.isLoggedIn

  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
