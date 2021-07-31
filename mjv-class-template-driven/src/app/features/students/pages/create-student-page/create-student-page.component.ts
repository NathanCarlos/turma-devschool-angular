import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  templateUrl: './create-student-page.component.html',
  styleUrls: ['./create-student-page.component.scss']
})
export class CreateStudentPageComponent implements OnInit {

  student: Student = this.studentsService.getDefaultStudent();

  constructor(
    private studentsService: StudentsService,
    private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(studentForm: NgForm) {
    const formValue = studentForm.value;
    const student: Student = this.studentsService.createStudentObject(
      this.student.id,
      formValue.name,
      formValue.email,
      formValue.password,
      formValue.monthlyPayment,
      this.student.inclusionDate,
      this.student.lastMontlyPayment,
      this.student.validRegistration,
      formValue.course
    );
    this.studentsService.createStudent(student);
    alert('Estudante incluído com sucesso!');
    this.router.navigateByUrl('/students');

  }

}
