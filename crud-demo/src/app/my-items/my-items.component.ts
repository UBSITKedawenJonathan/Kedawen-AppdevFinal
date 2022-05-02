import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../loan-listing';
import { Item } from '../loan';
@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {
  item:Item[]=[];
  constructor() { }

  ngOnInit(): void {
    this.item=ITEMS;
  }

}
