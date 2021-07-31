import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  membersList: Array<Member> = [
    { 
      id: 1,
      nome: 'Nathan Carlos',
      email: 'nathan@gmail.com',
      senha: '123456',
      valorMensalidade: 100,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01'
    },
    { 
      id: 2,
      nome: 'Alan Jhonnes',
      email: 'alan@gmail.com',
      senha: '123456',
      valorMensalidade: 250,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01'
    } ,
    { 
      id: 3,
      nome: 'Henrique Silva',
      email: 'henrique@gmail.com',
      senha: '123456',
      valorMensalidade: 360,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01'
    } 
  ];

  constructor() { }

  getMemberByEmailAndPassword(email: string, password: string) {
    return this.membersList.find((member) => member.email === email && member.senha === password);
  }

  getMembers() {
    return this.membersList;
  }

  getMemberById(id: number) {
    return this.membersList.find((member) => member.id === Number(id));
  }

  getMembersById(id: number) {
    return this.membersList.filter((member) => member.id === Number(id));
  }

  getMembersByName(name: string) {
    return this.membersList.filter((member) => member.nome.toUpperCase().search(name.toUpperCase()) > -1);
  }
}
