import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ItemsComponent } from './items/items.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { ContactSellerComponent }from './contact-seller/contact-seller.component';

const routes: Routes = [
  {path:'',redirectTo:'WelcomeComponent',pathMatch:'full'},
  {path:'items', component:ItemsComponent},
  {path:'Itemdetails/:id',component:ItemdetailsComponent},
  {path:'contactseller/:id',component:ContactSellerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
