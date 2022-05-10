import { Component, OnInit } from '@angular/core';
import { ITEMS } from 'src/item-listing';
import { Item } from 'src/items';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  items= ITEMS;

  selectedItem?: Item;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.selectedItem = ITEMS.find(selectedItem => selectedItem.id === id);
  }

}

