import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInventoryComponent } from './stock-inventory.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StockBranchComponent} from "../../components/stock-branch/stock-branch.component";
import {StockCounterComponent} from "../../components/stock-counter/stock-counter.component";
import {StockProductsComponent} from "../../components/stock-products/stock-products.component";
import {StockSelectorComponent} from "../../components/stock-selector/stock-selector.component";
import {StockInventoryService} from "../../services/stock-inventory.service";
import {Observable, of} from "rxjs";
import {DebugElement} from "@angular/core";


export const products = [{id:1, price: 10, name: 'Test'}];
class MockInventoryService {
  getProducts(){
    return of(products)
  }
  getCartItems(){
    return of([{product_id:1, quantity: 10}])
  }
}

describe('StockInventoryComponent', () => {
  let component: StockInventoryComponent;
  let fixture: ComponentFixture<StockInventoryComponent>;
  let el: DebugElement;
  let service: StockInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockCounterComponent,
        StockProductsComponent,
        StockSelectorComponent
      ],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: StockInventoryService, useClass: MockInventoryService}
      ]
    });
    fixture = TestBed.createComponent(StockInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = el.injector.get(StockInventoryService);
  });

  it('should get cart items and products on init', () => {
    spyOn(service, 'getProducts').and.callThrough();
    spyOn(service, 'getCartItems').and.callThrough();
    component.ngOnInit();
    expect(service.getProducts).toHaveBeenCalled();
    expect(service.getCartItems).toHaveBeenCalled();
  });

  it('should create a product map from the service response', () => {
    component.ngOnInit();
    expect(component.productMap.get(1)).toEqual({id: 1, price: 10, name: 'Test'})
  });

  it('should store the products response', () => {
    component.ngOnInit();
    expect(component.products).toEqual(products)
  });

  it('should create a stock', () => {
    spyOn(component, 'addStock');
    component.ngOnInit();
    expect(component.addStock).toHaveBeenCalledWith({product_id:1, quantity: 10});
  });


});
