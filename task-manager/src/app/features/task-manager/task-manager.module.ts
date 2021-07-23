import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TaskListComponent,
  ]
})
export class TaskManagerModule { }
