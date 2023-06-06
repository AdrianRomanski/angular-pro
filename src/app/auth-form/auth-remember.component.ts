import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'auth-remember',
  templateUrl: './auth-remember.component.html',
})
export class AuthRememberComponent {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(event: any) {
    this.checked.emit(event.target.checked);
  }

}
