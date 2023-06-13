import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Product} from "../../models/product.interface";

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent {
  @Input()
  parent!: FormGroup;

  @Input()
  products!: Product[];

  @Output()
  added = new EventEmitter<any>();


  get notSelected() {
    return (
      !this.parent.get('selector.product_id')?.value
    )
  }

  get stockExists() {
    return this.parent.hasError('stockExists');
  }

  onAdd() {
    this.added.emit(this.parent.get('selector')?.value);

    this.parent.get('selector')?.setValue({
      product_id: '',
      quantity: 10
    });

    // this.parent.get('selector')?.patchValue({
    //   product_id: '',
    // });
    //
    // this.parent.get('selector')?.reset({
    //   product_id: '',
    //   quantity: 10
    // });
  }
}
