import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <h1>Activated Parent!</h1>
      <router-outlet
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)">
      </router-outlet>
    </div>
    <div class="mail">
      <router-outlet name="pane"></router-outlet>
    </div>
  `
})
export class MailAppComponent {
  onActivate($event: any) {
    console.log('Activate', $event);
  }

  onDeactivate($event: any) {
    console.log('Deactivate', $event);
  }
}
