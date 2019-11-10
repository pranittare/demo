import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from '../models/item';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    // this.afAuth.auth.updateCurrentUser;

    this.itemService.getItems().subscribe(items =>{
      console.log(items);
      this.items = items
    });
 
  }
  deleteItem(event, item: Item) {
    this.clearState();
    this.itemService.deleteItem(item)
  }
  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }
  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }
}
