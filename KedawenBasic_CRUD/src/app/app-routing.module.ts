import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSellerComponent } from './contact-seller/contact-seller.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { NewItemsComponent } from './new-items/new-items.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewListsComponent } from './view-lists/view-lists.component';

const routes: Routes = [
  {path:'', redirectTo: 'ViewListsComponent', pathMatch: 'full'},
  {path:'viewlists', component: ViewListsComponent},
  {path:'contactseller/:id', component: ContactSellerComponent},
  {path:'edititem/:id', component: EditItemComponent},
  {path: 'viewdetails/:id', component: ViewDetailsComponent},
  {path: 'myitems', component: MyItemsComponent},
  {path: 'createitems', component: CreateNewComponent},
  {path: 'newitems', component: NewItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
