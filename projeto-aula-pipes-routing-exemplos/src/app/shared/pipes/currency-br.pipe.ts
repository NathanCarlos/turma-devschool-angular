import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBr'
})
export class CurrencyBrPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString() + ',00';
  }

}
