import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, pluck} from "rxjs";
import {Mail} from "../../models/mail.interface";

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent {
  message$: Observable<Mail> = this.router.data.pipe(pluck('message'))
  hasUnsavedChanges: boolean = false;
  constructor(private router: ActivatedRoute) {
  }

}
