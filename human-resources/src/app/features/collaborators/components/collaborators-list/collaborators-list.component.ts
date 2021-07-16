import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../../models/collaborator.model';

@Component({
  selector: 'app-collaborators-list',
  templateUrl: './collaborators-list.component.html',
  styleUrls: ['./collaborators-list.component.scss']
})
export class CollaboratorsListComponent implements OnInit {

  colaboradores: Array<Collaborator> = [
    { id: 1, nome: 'Nathan Carlos', salario: 7000, cargo: 'Dev Pl' }, 
    { id: 2, nome: 'David Carlos', salario: 3000, cargo: 'Dev Jr' }, 
    { id: 3, nome: 'Mateus Augusto', salario: 3500, cargo: 'Dev Jr' }, 
    { id: 4, nome: 'Alberto Silva', salario: 10000, cargo: 'Dev Sr' }, 
    { id: 5, nome: 'Rogerio Souza', salario: 9000, cargo: 'Dev Sr' }, 
    { id: 6, nome: 'Gabriel Miguel', salario: 9500, cargo: 'Dev Sr' }, 
    { id: 6, nome: 'Alan Jhonnes', salario: 11000, cargo: 'Arquiteto' }]

  constructor() { }

  ngOnInit(): void {
  }

}
