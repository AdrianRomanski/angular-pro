import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuthFormModule} from "./auth-form/auth-form.module";
import {CreditCardDirective} from "./credit-card/credit-card.directive";
import {TooltipDirective} from "./tooltip/tooltop.directive";
import {MyForDirective} from "./my-for/my-for.directive";

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective
  ],
  imports: [
    BrowserModule,
    AuthFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
