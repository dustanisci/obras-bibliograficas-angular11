import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(value: string): string {
    value = value.replace(/[\u0300-\u036f]/g, '');
    value = this.capitalize(value);
    let names = this.separateNames(value);

    if (names.length === 1) {
      return this.firstName(names).toUpperCase();
    }

    names = this.checkLastPartName(names);
    value = this.formatName(names);
    return this.nameToLowerCase(value);
  }

  capitalize(name: string): string {
    return name
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  lastName(names: string[]): string {
    return (names.slice(-1)[0]);
  }

  penultimateName(names: string[]): string {
    return (names.slice(-2)[0]);
  }

  firstName(names: string[]): string {
    return names[0];
  }

  separateNames(separateNames: string): Array<string> {
    return separateNames.split(' ');
  }

  checkLastPartName(names: string[]): string[] {
    if ((this.lastName(names).toLowerCase() === 'filho' ||
      this.lastName(names).toLowerCase() === 'filha' ||
      this.lastName(names).toLowerCase() === 'neto' ||
      this.lastName(names).toLowerCase() === 'neta' ||
      this.lastName(names).toLowerCase() === 'sobrinho' ||
      this.lastName(names).toLowerCase() === 'sobrinha' ||
      this.lastName(names).toLowerCase() === 'junior')
      && names.length > 2) {

      names.unshift(this.lastName(names).toUpperCase() + ',');
      names.pop();
      return names;
    }

    // Insere a vírgula no último elemento da posição e deixa em letras maísculas.
    names.slice(-1)[0] = this.lastName(names).toUpperCase() + ',';
    return names;
  }

  formatName(names: string[]): string {
    // Adiciona a vírgula caso não exista.
    let lastName = this.lastName(names).toUpperCase();
    if (!names.join(' ').includes(',')) {
      lastName += ',';
    }

    names.unshift(lastName);
    names.pop();
    return names.join(' ');
  }

  nameToLowerCase(name: string): string {
    const auxName = name;
    name = '';

    this.separateNames(auxName).map((word: string) => {
      if (word === 'De' || word === 'Da' || word === 'Do' || word === 'Das' || word === 'Dos') {
        name += ' ' + word.toLowerCase();
      } else {
        name += ' ' + word;
      }
    }).join(' ');

    // Elimina o espaço na frente do primeiro caractere
    return name.substring(1);
  }
}
