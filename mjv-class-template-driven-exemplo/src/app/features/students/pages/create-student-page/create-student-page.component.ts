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
    const student: Student = {
      id: this.student.id,
      ...studentForm.form.value,
      inclusionDate: this.student.inclusionDate,
      lastMontlyPayment: this.student.lastMontlyPayment
    };
    this.studentsService.createStudent(student);
    alert('Aluno adicionado com sucesso!');
    this.router.navigateByUrl('/students');
  }

}
