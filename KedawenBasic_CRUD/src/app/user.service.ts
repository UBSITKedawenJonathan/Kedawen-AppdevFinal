import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './item-listings';
import { MessageService } from './message.service';
import { Observable, observable, of }from 'rxjs';
//adding the HttpClient and HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';
//for error handling 
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private itemsUrl= 'api/items';//URL to web api
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  /* //allows getting Users from anywhere - a web service, local storage, or mock data source
  getItems(): Item[]{
    return ITEMS;
  } */

  //view list component
  getItems(): Observable<Item[]>{
    const items = of(ITEMS);

    //return items;
    return this.http.get<Item[]>(this.itemsUrl)
    .pipe(
      tap(_=> this.log('fetched items')),
      catchError(this.handleError<Item[]>('getItems',[]))//for error handling
    );
  }
  

  //view details components
  getItem(id: number): Observable<Item>{
    //const item=ITEMS.find(i => i.id === id)!;
    const url = `${this.itemsUrl}/${id}`;
    //return of(item);
    return this.http.get<Item>(url)
    .pipe(
      tap(_=> this.log(`fetched item id = ${id}`)),
      catchError(this.handleError<Item>(`getItem id =${id}`))
    );
  }

  //update user details
  updateItem(item: Item): Observable<any> {
    return this.http.put(this.itemsUrl, item, this.httpOptions).pipe(
      tap(_ => this.log(`updated item id=${item.id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  //POST new item to the server
  addItem(email: Item):Observable<Item>{
    return this.http.post<Item>(this.itemsUrl,email,this.httpOptions).pipe(
      tap((newItem: Item) => this.log(`added item w/ id=${newItem.id}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  //Delete item from server
  deleteItem(id: number): Observable<Item>{
    const url = `${this.itemsUrl}/${id}`;

    return this.http.delete<Item>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted item id=${id}`)),
      catchError(this.handleError<Item>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error:any):Observable<T> => {
      console.error(error);//error shown on the browser log 
      this.log(`$(operation} failed):${error.message}`)

    return of(result as T);
    };
  }

  private log(message: string): void {
    this.messageService.add(`ItemService: ${message}`);
  }
  

  constructor(
    private http: HttpClient,
    private messageService:MessageService
    
  ) { }
}

/**define the usersUrl of the from :base/:collectionName with the address if the users resource on the server.
* base -> resource
* collectionName -> the users data objects in the in-memory-data-service
*/

