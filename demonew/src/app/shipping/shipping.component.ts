import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ShippingService } from './shipping.service';
import { Shipping } from '../models/shipping.model';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestore ,AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  isLoggedIn = true;
  shipping: Shipping[];
  formValue: []
  addressForm: NgForm
  constructor(private shippingService: ShippingService, private afs: AngularFirestore) { }

  ngOnInit() {
    // this.shippingService.getAddress().subscribe(address =>{
    //   console.log(address);
    //   this.shipping = address
    //   const signin = this.afAuth.idToken
    //   console.log(signin)
    // })
    this.shippingService.getAddress().subscribe(shipping =>{
      console.log(shipping);
      this.shipping = shipping;
    })
  }
  onSwitchMode() {
    this.isLoggedIn =!this.isLoggedIn

  }
  // private buildForm() {
  //   this.addressForm = this.fb.group({
  //     inputAddress: ['', Validators.required],
  //     inputAddress2: ['', Validators.required],
  //     inputCity: ['', Validators.required],
  //     inputZip: ['', Validators.required],
  //   })
  // }
  onSubmit(shipping: Shipping) {
    // console.log(form.value);
    //  const inputAddress = form.value.inputAddress;
    //  const inputAddress2 = form.value.inputAddress2;
    //  const inputCity = form.value.inputCity;
    //  const inputZip = form.value.inputZip;
    //  this.formValue = form.value.subscribe(address =>{
    //    this.afs.collection('address');
    this.shippingService.updateShipping(shipping);

     }

  }

  

