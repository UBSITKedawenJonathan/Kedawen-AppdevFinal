import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewListsComponent}from './view-lists/view-lists.component';
import {ContactSellerComponent}from './contact-seller/contact-seller.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  {path:'',redirectTo:'ViewlistsComponent',pathMatch:'full'},
  {path:'viewLists', component:ViewListsComponent},
  {path:'contactseller/:id',component:ContactSellerComponent},
  {path:'edititem/:id',component:EditItemComponent},
  {path:'viewdetails/:id',component:ViewDetailsComponent},
  {path:'myitems',component:MyItemsComponent},
  {path:'createitem',component:CreateNewComponent},
  {path:'newItems',component:NewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
