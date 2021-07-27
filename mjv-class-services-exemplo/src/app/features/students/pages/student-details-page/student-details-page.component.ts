import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  templateUrl: './student-details-page.component.html',
  styleUrls: ['./student-details-page.component.scss']
})
export class StudentDetailsPageComponent implements OnInit {

  student?: Student;

  constructor(
    private studentService: StudentsService,
    private activedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      console.log(params.id);
      this.student = this.studentService.getStudentById(params.id);
    });
  }

}
