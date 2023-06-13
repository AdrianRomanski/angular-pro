import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Mail} from "./models/mail.interface";

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  getFolder(folder: string): Observable<Mail[]> {
    return this.http
      .get<Mail[]>(`/api/messages?folder=${folder}`);
  }

  getMail(id: string): Observable<Mail> {
    return this.http.get<Mail>(`/api/messages/${id}`);
  }
}
