import { Component, OnInit } from '@angular/core';
import { ItemService } from '../items/item.service';
import { Item } from '../models/item';
import {NgForm} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
item: Item = {
  title: '',
  description: ''
}
  constructor(private itemService: ItemService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.auth.updateCurrentUser;
  }
  onSubmit() {
    if (this.item.title != '' && this.item.description != '') {
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
      // form.reset()
    }
  }

}
