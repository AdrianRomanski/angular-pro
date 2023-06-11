import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Item, Product} from "../models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCardItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/cart');
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
}
