import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuthFormModule} from "./directives/auth-form/auth-form.module";
import {CreditCardDirective} from "./directives/credit-card/credit-card.directive";
import {TooltipDirective} from "./tooltip/tooltop.directive";
import {MyForDirective} from "./directives/my-for/my-for.directive";
import {FilesizePipe} from "./pipes/filesize.pipe";
import {StockInventoryModule} from "./stock-inventory/stock-inventory.module";
import {MailModule} from "./mail/mail.module";
import {PreloadingStrategy, Route, RouterModule, Routes} from "@angular/router";
import {Observable, of} from "rxjs";
import {AuthGuard} from "./auth/auth.guard";
import {SongsModule} from "./songs/songs.module";
import {Store} from "./store/store";

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? fn() : of(null);
  }
}

export const ROUTES: Routes = [
  { path: 'dashboard',
    data: {preload: true},
    // here i can use canLoadFn
    canLoad: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then((x) => x.DashboardModule)},
  { path: '**', redirectTo: 'mail/folder/inbox' }
];
@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
    FilesizePipe,
  ],
  imports: [
    BrowserModule,
    AuthFormModule,
    StockInventoryModule,
    MailModule,
    SongsModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: CustomPreload})
  ],
  providers: [CustomPreload, AuthGuard, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
