import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string | number): string {
    const splitedPhone = phone.toString().split('');
    if(splitedPhone.length === 11) {
      return `(${splitedPhone[0]}${splitedPhone[1]}) ${splitedPhone[2]}${splitedPhone[3]}${splitedPhone[4]}${splitedPhone[5]}${splitedPhone[6]}-${splitedPhone[7]}${splitedPhone[8]}${splitedPhone[9]}${splitedPhone[10]}`;
    };
    return phone.toString();
  }

}
