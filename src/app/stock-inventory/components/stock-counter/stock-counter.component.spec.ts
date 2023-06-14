import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCounterComponent } from './stock-counter.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('StockCounterComponent', () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent]
    });
    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    component.value = 0;
    fixture.detectChanges();
  });

  it('should increment correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
  });
  it('should decrement correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should call the output', () => {
      // spyOn(component.changed, 'emit').and.callThrough();
  });


  it('should increment when the + is clicked', () => {
    // spyOn(component.changed, 'emit').and.callThrough();
    el.query(By.css('button:first-child'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.value).toBe(1);
    expect(el.query(By.css('p')).nativeElement.textContent).toBe('1');
  });

  it('should increment the value when the up arrow is pressed', () => {
    // spyOn(component.changed, 'emit').and.callThrough();
    const event = new Event('KeyboardEvent') as any;
    event.code = 'ArrowUp';

    el.query(By.css('.stock-counter > div > div'))
      .triggerEventHandler('keydown', null);
    fixture.detectChanges();
    expect(component.value).toBe(1);
    expect(el.query(By.css('p')).nativeElement.textContent).toBe('1');
  });
});
