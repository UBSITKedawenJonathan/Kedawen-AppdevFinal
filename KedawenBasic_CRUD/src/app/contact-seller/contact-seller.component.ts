import { Component, OnInit } from '@angular/core';
import { ITEMS } from 'src/item-listing';
import { Item } from 'src/items';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-seller',
  templateUrl: './contact-seller.component.html',
  styleUrls: ['./contact-seller.component.css']
})
export class ContactSellerComponent implements OnInit {

  item= ITEMS;

  selectedItems?: Item;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.selectedItems = ITEMS.find(selectedItems => selectedItems.id === id);
  }

}