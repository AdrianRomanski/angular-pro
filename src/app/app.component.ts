import {
  AfterContentInit, ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef, TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {User} from "./auth-form/auth-from.interface";
import {AuthFormComponent} from "./auth-form/auth-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit{
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

  constructor(
    private resolver: ComponentFactoryResolver,
    private dr: ChangeDetectorRef,
  ) {
    setTimeout(() => {
      this.items = [...this.items, { name: 'Matt Skiba', age: 40, location: 'California' }];
    }, 2000);
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
