import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';

@Component({
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent implements OnInit {

  membersList: Array<Member> = [
    { 
      id: 1,
      nome: 'Nathan Carlos',
      valorMensalidade: 100,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01'
    },
    { 
      id: 2,
      nome: 'Alan Jhonnes',
      valorMensalidade: 250,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01'
    } ,
    { 
      id: 3,
      nome: 'Henrique Silva',
      valorMensalidade: 360,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01'
    } 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
