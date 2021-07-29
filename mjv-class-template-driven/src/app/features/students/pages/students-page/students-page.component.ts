import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  students: Array<Student> = [];

  filteredStudents: Array<Student> = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.students = this.studentsService.getStudents();
    this.filteredStudents = this.students;
  }

  findStudentByFilter(event: any, type: 'Name' | 'Id') {
    const value = event.target.value;
    const students = type === 'Id' ? this.studentsService.getStudentsByFilterId(value) : this.studentsService.getStudentsByFilterName(value);
    if(value.length === 0) {
      return this.filteredStudents = this.students;
    }
    return this.filteredStudents = students;
  }

}
