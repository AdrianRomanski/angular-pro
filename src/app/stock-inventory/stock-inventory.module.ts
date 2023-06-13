import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockInventoryComponent} from "./containers/stock-inventory/stock-inventory.component";
import {ReactiveFormsModule} from "@angular/forms";
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import {StockInventoryService} from "./services/stock-inventory.service";
import {HttpClientModule} from "@angular/common/http";
import { StockCounterComponent } from './components/stock-counter/stock-counter.component';


@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent,
    StockCounterComponent
  ],
  exports: [
    StockInventoryComponent
  ],
  providers: [
    StockInventoryService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class StockInventoryModule { }
