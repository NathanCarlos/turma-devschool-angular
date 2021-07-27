import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeText'
})
export class ChangeTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
