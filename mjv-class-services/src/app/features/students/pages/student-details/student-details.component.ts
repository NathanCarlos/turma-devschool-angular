import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  student?: Student;

  constructor(
    private activedRoute: ActivatedRoute,
    private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.student = this.studentsService.getStudentById(params.id);
    })
  }

}
