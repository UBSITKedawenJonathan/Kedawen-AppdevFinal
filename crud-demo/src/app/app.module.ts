import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ViewListsComponent } from './view-lists/view-lists.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ContactSellerComponent } from './contact-seller/contact-seller.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { NewItemComponent } from './new-item/new-item.component';

import {RouterModule} from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ViewListsComponent,
    ViewDetailsComponent,
    ContactSellerComponent,
    MyItemsComponent,
    CreateNewComponent,
    EditItemComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
