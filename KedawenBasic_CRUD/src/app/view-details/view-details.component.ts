import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ITEMS } from '../item-listings';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  //items= ITEMS;
  //?: safe navigation operator -> safe guard against null and undefined 
  @Input()item?:Item;
  items: Item[]=[];

  /* selectItem?: Item;
   onSelect(item:Item):void{
     this.selectItem = item;
   } */

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    /* const id=this.route.snapshot.paramMap.get('id');
    this.selectItem = ITEMS.find(selectItem => selectItem.id === id); */

    this.getItem();
  }

  getItem(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getItem(id)
    .subscribe(item => this.item=item);
  }

  goBack():void {
    this.location.back();
  }

  save(): void{
    if(this.item){
      this.userService.updateItem(this.item)
      .subscribe(()=>this.goBack());
    }
  }
}
