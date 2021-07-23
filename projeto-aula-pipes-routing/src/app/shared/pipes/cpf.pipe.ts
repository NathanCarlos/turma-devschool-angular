import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(cpf: string): string {
    const splitedCpf = cpf.split('');

    return `${splitedCpf[0]}${splitedCpf[1]}${splitedCpf[2]}.${splitedCpf[3]}${splitedCpf[4]}${splitedCpf[5]}.${splitedCpf[6]}${splitedCpf[7]}${splitedCpf[8]}-${splitedCpf[9]}${splitedCpf[10]}`;
  }

}
