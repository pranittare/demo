import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/item'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>
  itemDoc: AngularFirestoreDocument<Item>
  constructor(private afs: AngularFirestore) { 
    this.itemCollection = this.afs.collection('items', ref => ref.orderBy('title', 'asc'));
    this.items = this.itemCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data
      })
    }));
  }
  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.itemCollection.add(item);
  }

  deleteItem(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}
