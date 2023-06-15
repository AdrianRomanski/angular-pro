import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "../../store/store";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  getPlayList$ = this.http
    .get(`/api/playlist`);

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }
}
