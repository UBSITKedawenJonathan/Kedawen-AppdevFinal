import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../item-listings';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-view-lists',
  templateUrl: './view-lists.component.html',
  styleUrls: ['./view-lists.component.css']
})
export class ViewListsComponent implements OnInit {

  //items=ITEMS; ->user definition to display the list of user
  items: Item [] = [];
  dob!:Date;

    /* //retrieve users through the userService
  getItems(): void {
    this.items = this.userService.getItems();
  } */


 selectItem?: Item;
/*     onSelect(item: Item): void {
    this.selectItem = item;
    } */
  constructor(
    //provider to access url parameter
    private route:ActivatedRoute,
    //userService
    private userService: UserService
  ) { }

  ngOnInit(): void {
    //call getItems
    this.getItems();
  }
    getItems(): void{
      this.userService.getItems().
      subscribe (items => this.items = items);

    
    /* const id = this.route.snapshot.paramMap.get('id');
    this.selectItem = ITEMS.find(selectItem => selectItem.id === id); */
  }

  add(email:string):void{
    email=email.trim();
    if(!email) {return;}
    this.userService.addItem({ email } as Item)
    .subscribe(item => {
      this.items.push(item);
    });
  }

  delete(item:Item): void{
    this.confirmDelete();
    this.items = this.items.filter(i => i !== item);
    this.userService.deleteItem(item.id)
    .subscribe();
  }

  confirmDelete(){
    alert('Are you sure you want to delete this drink?');
  }

}
