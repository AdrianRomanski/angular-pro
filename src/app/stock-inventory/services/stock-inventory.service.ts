import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {find, map, mapTo, Observable, switchMap} from "rxjs";
import {Item, Product} from "../models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  constructor(
    private http: HttpClient
  ) {
  }

  getCartItems(): Observable<Item[]> {
    return this.http.get<Item[]>('api/carts');
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/products');
  }

  getBranches(id: string): Observable<string[]> {
    return this.http.get<string[]>('/api/branches');
  }
}
