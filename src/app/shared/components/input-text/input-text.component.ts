import { Input } from '@angular/core';
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {

  @Input()
  label = '';

  @Input()
  id = '';

  @Input()
  error = false;

  value = '';

  onChangeCb: (value: string) => void = () => { };
  onTouchedCb: (value: string) => void = () => { };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  typedValue(value: string): void {
    this.value = value;
    this.onChangeCb(this.value);
    this.onTouchedCb(this.value);
  }

}
