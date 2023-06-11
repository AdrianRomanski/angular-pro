import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMessageComponent } from './auth-message.component';

describe('AuthMessagComponent', () => {
  let component: AuthMessageComponent;
  let fixture: ComponentFixture<AuthMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthMessageComponent]
    });
    fixture = TestBed.createComponent(AuthMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
