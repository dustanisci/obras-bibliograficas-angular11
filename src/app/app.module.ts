import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputNumberComponent } from './shared/components/input-number/input-number.component';
import { InputTextComponent } from './shared/components/input-text/input-text.component';
import { FormatNamePipe } from './shared/pipes/format-name/format-name.pipe';
import { OnlyLettersPipe } from './shared/pipes/only-letters/only-letters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputNumberComponent,
    InputTextComponent,
    FormatNamePipe,
    OnlyLettersPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
