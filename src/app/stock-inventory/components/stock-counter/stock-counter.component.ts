import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: 'app-stock-counter',
  providers: [COUNTER_CONTROL_ACCESSOR],
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss']
})
export class StockCounterComponent implements ControlValueAccessor{

  private onTouch!: Function;
  private onModelChange!: Function;

  @Input()
  step: number = 10;
  @Input()
  min: number = 10;
  @Input()
  max: number = 1000;

  value: number = 0;

  focus: boolean = false;

  increment() {
    if(this.value < this.max) {
      this.value = this.value += this.step;
      this.onModelChange(this.value);
    }
  }

  decrement() {
    if(this.value > this.min) {
      this.value = this.value -= this.step;
      this.onModelChange(this.value);
    }
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  writeValue(value: any): void {
    this.value = value || 0;
  }

  onKeyDown(event: KeyboardEvent) {
    console.log(event);

    const handlers = {
      'ArrowDown': () => this.decrement(),
      'ArrowUp': () => this.increment()
    }
    console.log(event);

    // @ts-ignore
    if(handlers[event.code]) {
      // @ts-ignore
      handlers[event.code]
      event.preventDefault();
      event.stopPropagation();
    }
    this.onTouch();
  }

  onBlur(event: FocusEvent) {
    console.log('onBlur');
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  onFocus(event: FocusEvent) {
    console.log('onFocus');
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }
}
