import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyLetters'
})
export class OnlyLettersPipe implements PipeTransform {

  transform(value: any): string {
    return value.replace(/[^a-zA-Z\u00C0-\u00FF ]+/g, '');
  }

}
