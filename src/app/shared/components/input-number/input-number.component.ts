import { Component, Output, EventEmitter, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Pallete } from 'src/assets/scss/pallete.enum';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true,
    },
  ],
})

export class InputNumberComponent implements ControlValueAccessor {

  @Input()
  error = false;

  @Input()
  label = '';

  @Output()
  subtractBtn = new EventEmitter<void>();

  @Output()
  addBtn = new EventEmitter<void>();

  counter = 0;

  onChangeCb: (counter: number) => void = () => { };
  onTouchedCb: (counter: number) => void = () => { };


  writeValue(counter: number): void {
    this.counter = counter;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  add(): void {
    this.counter++;
    this.onChangeCb(this.counter);
    this.onTouchedCb(this.counter);
    this.addBtn.emit();
  }

  subtract(): void {
    this.counter--;
    this.onChangeCb(this.counter);
    this.onTouchedCb(this.counter);
    this.subtractBtn.emit();
  }

}
