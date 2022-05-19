import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ITEMS } from '../item-listings';
import { UserService } from '../user.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-contact-seller',
  templateUrl: './contact-seller.component.html',
  styleUrls: ['./contact-seller.component.css']
})
export class ContactSellerComponent implements OnInit {

  /* items= ITEMS; */
  @Input()item?:Item;

  selectItem?: Item;
  onSelect(item:Item):void{
    this.selectItem = item;
  } 

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    /* const id=this.route.snapshot.paramMap.get('id');
    this.selectItem = ITEMS.find(selectedItem => selectItem.id === id); */
    this.getItem();
  }
  getItem(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getItem(id)
    .subscribe(item => this.item=item);
  }

}
