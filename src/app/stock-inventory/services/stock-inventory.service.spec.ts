import { TestBed } from '@angular/core/testing';

import { StockInventoryService } from './stock-inventory.service';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {of} from "rxjs";
import * as http from "http";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
)


class MockHttp {
  get(body: any) {
    return of(body)
  }
}

export const cartItems = [
  {product_id: 1, quantity: 10},
  {product_id: 2, quantity: 5}
]

export const productItems = [
  {id: 1, price: 10, name: 'Test' },
  {id: 2, price: 100, name: 'Another test' }
]

describe('StockInventoryService', () => {
  let service: StockInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StockInventoryService,
        {provide: http, useClass: MockHttp}
      ]
    });
    // service = TestBed.inject(StockInventoryService);
  });

  it('should get cart items', () => {
    // @ts-ignore
    // spyOn(http, 'get').and.returnValue(new Response())
  });
});
