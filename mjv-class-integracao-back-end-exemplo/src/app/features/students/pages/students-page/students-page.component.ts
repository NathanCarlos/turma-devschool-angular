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
    this.studentsService.getStudents().subscribe((students) => {
      this.students = students;
      this.filteredStudents = this.students;
    }, err => {
      console.log(err);
    });
  }

}
