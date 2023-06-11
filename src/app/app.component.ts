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
export class AppComponent implements AfterContentInit, OnInit{

  title = 'angular-pro';

  component!: ComponentRef<AuthFormComponent>;

  rememberMe: boolean = false;

  ctx = {
    location: 'England, UK',
    $implicit: 'Implicit Name'
  };

  @ViewChild('entry', {read: ViewContainerRef}) entry!: ViewContainerRef;
  @ViewChild('tmpl') tmpl!: TemplateRef<any>;

  items = [{
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  },{
    name: 'Tom Delonge',
    age: 41,
    location: 'California'
  },{
    name: 'Travis Barker',
    age: 41,
    location: 'California'
  }];

  files: File[]  = [];
  mapped: File[]  = [];

  constructor(
    private resolver: ComponentFactoryResolver,
    private dr: ChangeDetectorRef,
    private filesizePipe: FilesizePipe
  ) {
    this.mapped = this.files.map(file => {
      return {
        ...file,
        size: this.filesizePipe.transform(file.size, 'mb')
      }
    })


    setTimeout(() => {
      this.items = [...this.items, { name: 'Matt Skiba', age: 40, location: 'California' }];
    }, 2000);
  }

  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }
  ngAfterContentInit(): void {
      // setTimeout(() => {
      //   const factory = this.resolver.resolveComponentFactory(AuthFormComponent)
      //
      //   this.component  = this.entry.createComponent(factory);
      //   // @ts-ignore
      //   this.component.instance['title'] = 'Dynamic title';
      //
      //   this.component.instance.submitted.subscribe(this.loginUser);
      //
      //   this.dr.detectChanges();
      //   this.entry.createEmbeddedView(this.tmpl, {
      //     location: 'England, UK',
      //     $implicit: 'Implicit Name'
      //   });
      //   this.entry.createEmbeddedView(this.tmpl);
      // })



    }

  destroyComponent() {
    this.component.destroy();
  }

}
