import { Component, Input, OnInit } from '@angular/core';
import { Collaborator } from '../../models/collaborator.model';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  @Input()
  collaborator?: Collaborator;

  constructor() { }

  ngOnInit(): void {
  }

  removeCollaborator() {
    alert(`Colaborador ${this.collaborator?.nome} excluído com sucesso!`);
  }

}
