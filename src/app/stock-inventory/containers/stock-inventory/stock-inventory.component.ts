import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Item, Product} from "../../models/product.interface";
import {StockInventoryService} from "../../services/stock-inventory.service";
import {filter, forkJoin, map, Observable, tap} from "rxjs";
import {StockValidators} from "./stock-inventory.validators";

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit{
  products: Product[] = [];

  productMap!: Map<number, Product>;
  total!: number;

  form = this.fb.group({
    store: this.fb.group({
      branch: ['', [Validators.required, StockValidators.checkBranch], [this.validateBranch.bind(this)]],
      code: ['', Validators.required],
    }),
    selector: this.createStock({}),
    stock: this.fb.array([])
  }, {validator: StockValidators.checkStockExists});

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

  calculateTotal(value: Item[]) {
    this.total = value.reduce((prev, next) => {
      // @ts-ignore
      return prev + next.quantity * (this.productMap.get(next.product_id)?.price);
    }, 0)
  }

  validateBranch(control: AbstractControl) {
    return this.service.getBranches(control.value)
      .pipe(
        filter((v) => v === control.value),
        map((v: string[]) => v.length > 0 ? null : {unknownBranch: true}),
        tap((v) => console.log(v))
      )
  }

  ngOnInit(): void {
    const cart = this.service.getCartItems();
    const products = this.service.getProducts();

    forkJoin([cart, products])
      .subscribe(([cart, products]: [Item[], Product[]]) => {

        const myMap = products
          .map<[number, Product]>(product => [product.id, product]);
        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach(item => this.addStock(item));

        this.calculateTotal(this.form.get('stock')?.value as Item[])

        this.form.get('stock')?.valueChanges.subscribe(value => {
          this.calculateTotal(value as Item[]);
        })

      });

  }
}
