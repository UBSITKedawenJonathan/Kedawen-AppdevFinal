import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ViewListsComponent } from './view-lists/view-lists.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ContactSellerComponent } from './contact-seller/contact-seller.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { NewItemsComponent } from './new-items/new-items.component';


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
    NewItemsComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
