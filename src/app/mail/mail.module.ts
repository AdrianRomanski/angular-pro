import {inject, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRouteSnapshot, ResolveFn, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import {MailService} from "./mail.service";
import {Mail} from "./models/mail.interface";
import { MailViewComponent } from './components/mail-view/mail-view.component';
import * as path from "path";
import {AuthGuard} from "../auth/auth.guard";
import {AuthModule} from "../auth/auth.module";
import {MailViewGuard} from "./components/mail-view/mail-view.guard";

export const folderResolver: ResolveFn<Mail[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(MailService).getFolder(route.paramMap.get('name')!);
  };

export const mailViewResolver: ResolveFn<Mail> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(MailService).getMail(route.paramMap.get('id')!);
  };

export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {messages: folderResolver}
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        canDeactivate: [MailViewGuard],
        outlet: 'pane',
        resolve: {message: mailViewResolver}
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent
  ],
  exports: [
    MailAppComponent
  ],
  providers: [MailService]
})
export class MailModule {}
