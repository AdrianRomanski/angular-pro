import {Component, OnInit} from '@angular/core';

import { Mail } from '../../models/mail.interface';
import {ActivatedRoute} from "@angular/router";
import {Observable, pluck} from "rxjs";


@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{title | async}}</h2>
    <mail-item
      *ngFor="let message of (messages | async)"
      [message]="message">
    </mail-item>
  `
})
export class MailFolderComponent implements OnInit{
  // @ts-ignore
  messages: Observable<Mail[]> = this.route.data.pipe(pluck('messages'));
  title: Observable<string> = this.route.params.pipe(pluck('name'))
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(console.log);
  }
}
