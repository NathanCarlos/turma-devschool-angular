import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsListComponent } from './components/collaborators-list/collaborators-list.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';



@NgModule({
  declarations: [
    CollaboratorsListComponent,
    CollaboratorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollaboratorsListComponent
  ]
})
export class CollaboratorsModule { }
