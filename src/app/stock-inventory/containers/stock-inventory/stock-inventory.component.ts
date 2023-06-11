import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../models/product.interface";
import {StockInventoryService} from "../../services/stock-inventory.service";

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent {
  products: Product[] = [];


  form = this.fb.group({
    store: this.fb.group({
      branch: this.fb.control('B182'),
      code: this.fb.control('1234'),
    }),
    selector: this.createStock({}),
    stock: this.fb.array([
      this.createStock({product_id: 1, quantity: 10}),
      this.createStock({product_id: 2, quantity: 10})
    ])
  })

  constructor(
    private fb: FormBuilder,
    private service: StockInventoryService
  ) {}

  onSubmit() {
    console.log('Submit', this.form.value);
  }

  createStock(stock: any) {
    return this.fb.group({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10)
    })
  }

  addStock(stock: any) {
    console.log('stock', stock)
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({group, index}: {group: FormGroup, index: number}) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }
}
