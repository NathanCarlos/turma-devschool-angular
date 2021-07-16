import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsListComponent } from './components/collaborators-list/collaborators-list.component';



@NgModule({
  declarations: [
    CollaboratorsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollaboratorsListComponent
  ]
})
export class CollaboratorsModule { }
