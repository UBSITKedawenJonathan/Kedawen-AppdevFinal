import { Component, OnInit } from '@angular/core';
import { ITEMS } from 'src/item-listing';
import { Item } from 'src/items';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  item:Item[]=[];
  constructor() { }

  ngOnInit(): void {
    this.item=ITEMS;
  }

}
