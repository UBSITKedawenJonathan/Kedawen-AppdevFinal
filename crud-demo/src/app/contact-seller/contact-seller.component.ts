import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../loan-listing';
import { Item } from '../loan';
import { MyItemsComponent } from '../my-items/my-items.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-seller',
  templateUrl: './contact-seller.component.html',
  styleUrls: ['./contact-seller.component.css']
})
export class ContactSellerComponent implements OnInit {

  items= ITEMS;

  selectedItems?: Item;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.selectedItems = ITEMS.find(selectedItems => selectedItems.id === id);
  }

}