import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input()
  students: Array<Student> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
