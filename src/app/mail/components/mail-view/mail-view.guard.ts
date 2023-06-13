import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {MailViewComponent} from "./mail-view.component";
import {Observable, of} from "rxjs";


@Injectable()
export class MailViewGuard implements CanDeactivate<MailViewComponent> {
  canDeactivate(
    component: MailViewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): any {
    if(component.hasUnsavedChanges) {
      return window.confirm('Are you sure you want to leave?')
    }
    return of(true);
  }
}
