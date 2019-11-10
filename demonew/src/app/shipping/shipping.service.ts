import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Shipping } from '../models/shipping.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';




@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  addressCollection: AngularFirestoreCollection<Shipping>;
  shipping: Observable<Shipping[]>;
  shippingDoc: AngularFirestoreDocument<Shipping>
  id: string
  // , ref => ref.orderBy('inputCity', 'asc')
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { 
    afAuth.auth.onAuthStateChanged(user =>{
      if (user) {
    this.id = afAuth.auth.currentUser.uid
        
      }
    })
    
    // afAuth.user.
    this.addressCollection = this.afs.collection('address');
    this.shipping = this.addressCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Shipping;
        data.id = a.payload.doc.id;
        // data.id = afAuth.auth.onAuthStateChanged
        return data
      })
    }));
  }
  // createAdrress(): AngularFireObject<Shipping> {
  //   const shippingdefalult = new Address()

  // }

  getAddress() {
    return this.shipping;
  }
  addAddress(shipping: Shipping) {
    this.addressCollection.add(shipping);
    // this.addressCollection.doc.bind(shipping);
  }
  
  updateShipping(shipping: Shipping) {
    
    // this.shippingDoc = this.afs.doc(`users/address/${this.id}`);
    this.shippingDoc = this.afs.doc(`address/${this.id}`);

    // this.shippingDoc = this.afs.doc(`users/${this.id}/address`);
    console.log(this.shippingDoc);

    this.shippingDoc.update(shipping)
  }
  // addAddress(shipping: Shipping) {
  //   this.addressCollection.add(shipping)
  // }
  // updateAddress(shipping: Shipping) {
  //   this.shippingDoc = this.afs.doc(`address/${shipping.id}`);
  //   this.shippingDoc.update(shipping);
  // }
}
