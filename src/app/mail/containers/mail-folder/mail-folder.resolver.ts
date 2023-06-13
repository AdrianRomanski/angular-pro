// import { Injectable} from "@angular/core";
// import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
// import {Mail} from "../../models/mail.interface";
// import {Observable} from "rxjs";
// import {MailService} from "../../mail.service";
//
// @Injectable()
// export class MailFolderResolver implements Resolve<Mail[]>{
//
//   constructor(private mailService: MailService) {
//   }
//
//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<Mail[]> {
//     return this.mailService.getFolder(route.params['name']);
//   }
// }
