import { forwardRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputNumberComponent } from '../input-number/input-number.component';

import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextComponent],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => InputNumberComponent),
          multi: true,
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should write value', () => {
    component.writeValue('test');
    expect(component.value).toEqual('test');
  });

  it('should test the change', () => {
    component.registerOnChange('test');
    expect(component.onChangeCb).toEqual('test');
  });

  it('should test the touch', () => {
    component.registerOnTouched('test');
    expect(component.onTouchedCb).toEqual('test');
  });

  it('should test the typed value', () => {
    spyOn(component, 'onTouchedCb');
    spyOn(component, 'onChangeCb');
    component.typedValue('test');

    expect(component.onTouchedCb).toHaveBeenCalled();
    expect(component.onChangeCb).toHaveBeenCalled();
    expect(component.value).toEqual('test');
  });
});
