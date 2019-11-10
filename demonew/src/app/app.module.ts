import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavbarComponent } from './navbar/navbar.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { UsersComponent } from './users/users.component';
import { ShippingComponent } from './shipping/shipping.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    UsersComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
