import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Array<Task> = [
    { id: 1, description: 'Criar um projeto básico', completed: false },
    { id: 2, description: 'Colocar o lixo para fora até as 19h', completed: true },
    { id: 3, description: 'Fazer o jantar até as 22h', completed: true },
    { id: 4, description: 'Reunião de alinhamento dia 18/07 as 14h', completed: true },
    { id: 5, description: 'Reunião de alinhamento projeto bradesco 18/07 as 16h', completed: false },
    { id: 6, description: 'Criar conteúdo da aula', completed: false }
  ];

  filteredTasks: Array<Task> = this.tasks;

  constructor() { }

  ngOnInit(): void {
  }

  searchTask(event: any) {
    const value = event.target.value.toUpperCase();
    this.filteredTasks = this.filteredTasks.filter(
      (task) => task.description.toUpperCase().search(value) > -1);
    if (value.length === 0) this.filteredTasks = this.tasks;
  }

}
