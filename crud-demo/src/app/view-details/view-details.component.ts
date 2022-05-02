import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../loan-listing';
import { Item } from '../loan';
import { MyItemsComponent } from '../my-items/my-items.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

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
