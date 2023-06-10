import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild, ElementRef,
  EventEmitter,
  Output, Renderer2,
  ViewChild
} from '@angular/core';
import {User} from "./auth-from.interface";
import {AuthRememberComponent} from "./auth-remember/auth-remember.component";
import {AuthMessageComponent} from "./auth-message/auth-message.component";

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit{

  showMessage: boolean = false;
  title: string = '';

  @ContentChild(AuthRememberComponent) remember!: AuthRememberComponent;
  @ViewChild(AuthMessageComponent) message!: AuthMessageComponent;
  @ViewChild('email') email!: ElementRef;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit(): void {
    if(this.message) {
      this.message.days = 30;
    }
    if(this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      })
    }
  }

  ngAfterViewInit(): void {
    console.log(this.message);
    if(this.message) {
        this.message.days = 30;
        this.cd.detectChanges();
    }
    console.log(this.email.nativeElement);

    this.renderer.setAttribute(this.email.nativeElement,
      'placeholder', 'Enter your email address');
    this.renderer.addClass(this.email.nativeElement, 'email');

    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();
  }
}
