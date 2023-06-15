import { ComponentFixture, TestBed } from '@angular/core/testing';

import {DebugElement} from "@angular/core";
import {CreditCardDirective} from "./credit-card.directive";

describe('CredictCardDirective', () => {
  let component: CreditCardDirective;
  let fixture: ComponentFixture<CreditCardDirective>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCardDirective]
    });
    fixture = TestBed.createComponent(CreditCardDirective);
    component = fixture.componentInstance;
    // component.value = 0;
    fixture.detectChanges();
  });
});
