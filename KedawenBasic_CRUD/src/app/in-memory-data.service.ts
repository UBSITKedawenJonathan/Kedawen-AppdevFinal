import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{
  createDb() {
    const items = [
      {  id: 1,  pname: 'Buko',  type: 'refreshment',  stock: 5,  pprice: 50.00,  fname: 'Jonathan',  lname: 'kedawen',  email: 'kedawenjr123@yahoo.sdaasd',  mobnum: '09999999999',  dob: new Date(2012, 1, 1),pic:"../assets/buko.png"
   },
   {id: 2, pname: 'Ice', type: 'malamig', stock: 122222, pprice: 269.00, fname: 'Jonathan', lname: 'kedawen', email: 'kedawenjr123@yahoo.sdaasd',  mobnum: '09999999999',  dob: new Date(2012, 1, 1),pic:"../assets/ice.png"
    },
    { id: 3, pname: 'Cokes', type: 'sopdrink', stock: 3, pprice: 899.00, fname: 'Jonathan', lname: 'kedawen', email: 'kedawenjr123@yahoo.sdaasd',  mobnum: '09999999999',  dob: new Date(2012, 1, 1),pic:"../assets/milk.png"
    }
    ];
    return {items}
  }

  generateId(items: Item[]): number{
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1; 
  }

  constructor() { }
}
