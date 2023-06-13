import {
  AfterContentInit, ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef, OnInit, TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {User} from "./directives/auth-form/auth-from.interface";
import {AuthFormComponent} from "./directives/auth-form/auth-form.component";
import {FilesizePipe} from "./pipes/filesize.pipe";
import {NavigationEnd, NavigationError, Router} from "@angular/router";
import {filter} from "rxjs";

interface File {
  name: string,
  size: number,
  type: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilesizePipe]
})
export class AppComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationError)
    ).subscribe(console.log);
  }

}
