import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputNumberComponent } from './shared/components/input-number/input-number.component';
import { InputTextComponent } from './shared/components/input-text/input-text.component';
import { FormatNamePipe } from './shared/pipes/format-name/format-name.pipe';
import { OnlyLettersPipe } from './shared/pipes/only-letters/only-letters.pipe';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [
        AppComponent,
        ButtonComponent,
        InputNumberComponent,
        InputTextComponent,
        FormatNamePipe,
        OnlyLettersPipe,
      ],
      providers: [

      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('add a new control form group ', () => {
    it('should test the counter limit and if he didnt create the form control', () => {
      component.authorForm.controls.totalAuthors.setValue(51);
      component.addControlFormGroup();
      expect(component.authorForm.value.totalAuthors).toEqual(50);
    });

    it('should creates the form control', () => {
      component.authorForm.controls.totalAuthors.setValue(1);
      component.addControlFormGroup();
      component.authorForm.controls.totalAuthors.setValue(2);
      component.addControlFormGroup();

      const authorsArray = Object.keys(component.authorForm.controls).filter((author: string) => author.includes('author'));
      expect(authorsArray.length).toEqual(2);
    });
  });

  it('should removes the form control', () => {
    component.authorForm.controls.totalAuthors.setValue(1);
    component.addControlFormGroup();
    component.removeControlFormGroup();

    const authorsArray = Object.keys(component.authorForm.controls).filter((author: string) => author.includes('author'));
    expect(authorsArray.length).toEqual(0);
  });

  it('should test input validation', () => {
    component.authorForm.controls.totalAuthors.setValue(1);
    component.addControlFormGroup();
    component.checkTypedInputText('test1', 'author1');
    expect(component.authorForm.value.author1).toEqual('test');
  });

  it('should reset the form', () => {
    component.authorForm.controls.totalAuthors.setValue(1);
    component.showFormattedNames = true;
    component.addControlFormGroup();
    component.reset();

    expect(component.showFormattedNames).toBeFalse();
    expect(component.authorForm.value.totalAuthors).toEqual(0);
  });

  it('should send the form', () => {
    component.authorForm.controls.totalAuthors.setValue(1);
    component.addControlFormGroup();
    component.sendData();

    expect(component.showFormattedNames).toBeTruthy();
    expect(component.namesPrint.length).toEqual(1);
  });


});
