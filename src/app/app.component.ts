import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OnlyLettersPipe } from './shared/pipes/only-letters/only-letters.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  authorForm: FormGroup = this.fb.group({
    totalAuthors: [0, [this.isTotalAuthorValid]],
  });

  onlyNumber: OnlyLettersPipe = new OnlyLettersPipe();
  showFormattedNames = false;
  namesPrint: string[] = [];

  constructor(private fb: FormBuilder) { }

  addControlFormGroup(): void {
    if (this.authorForm.value.totalAuthors > 50) {
      this.authorForm.controls.totalAuthors.setValue(50);
    } else {
      this.authorForm.addControl('author' + this.authorForm.value.totalAuthors, new FormControl('', Validators.required));
    }
  }

  removeControlFormGroup(): void {
    this.authorForm.removeControl('author' + this.authorForm.value.totalAuthors);
  }

  isTotalAuthorValid(control: AbstractControl): object | null {
    return control.value === 0 || control.value === null ? { invalid: true } : null;
  }

  hasErrorInputNumber(): boolean {
    return this.authorForm.controls.totalAuthors.invalid &&
      (this.authorForm.controls.totalAuthors.touched ||
        this.authorForm.controls.totalAuthors.dirty) ? true : false;
  }

  hasErrorInputText(index: number): boolean {
    return this.authorForm.controls['author' + (index + 1)] &&
      this.authorForm.controls['author' + (index + 1)].invalid &&
      (this.authorForm.controls['author' + (index + 1)].touched ||
        this.authorForm.controls['author' + (index + 1)].dirty) ? true : false;
  }

  checkTypedInputText(value: any, controlName: string): void {
    this.authorForm.controls[controlName].setValue(this.onlyNumber.transform(value));
  }

  sendData(): void {
    this.namesPrint = [];
    Object.keys(this.authorForm.controls)
      .filter((author: string) => author.includes('author'))
      .map((author: string) => {
        this.namesPrint.push(this.authorForm.controls[author].value);
      });

    this.showFormattedNames = true;
  }

  reset(): void {
    this.authorForm.reset();
    this.authorForm.controls.totalAuthors.setValue(0);

    Object.keys(this.authorForm.controls)
      .filter((author: string) => author.includes('author'))
      .map((author: string) => {
        this.authorForm.removeControl(author);
      });

    this.showFormattedNames = false;
  }

}
