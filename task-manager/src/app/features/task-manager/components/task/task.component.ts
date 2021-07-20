import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input()
  task?: Task;

  constructor() { }

  ngOnInit(): void {
  }

  updateCompleted() {
    if(this.task) {
      this.task.completed = !this.task?.completed;
    }
  }

}
