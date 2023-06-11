import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuthFormModule} from "./directives/auth-form/auth-form.module";
import {CreditCardDirective} from "./directives/credit-card/credit-card.directive";
import {TooltipDirective} from "./tooltip/tooltop.directive";
import {MyForDirective} from "./directives/my-for/my-for.directive";
import {FilesizePipe} from "./pipes/filesize.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
    FilesizePipe
  ],
  imports: [
    BrowserModule,
    AuthFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
