import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  templateUrl: './create-student-page.component.html',
  styleUrls: ['./create-student-page.component.scss']
})
export class CreateStudentPageComponent implements OnInit {

  student: Student = this.studentsService.getDefaultStudent();

  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('exemplo@exemplo.com', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    monthlyPayment: new FormControl(0, [Validators.required, Validators.min(100), Validators.max(1500)]),
    inclusionDate: new FormControl(this.student.inclusionDate),
    lastMontlyPayment: new FormControl(this.student.lastMontlyPayment),
    course: new FormControl('', [Validators.required])
  });

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentForm.controls.inclusionDate.disable();
    this.studentForm.controls.lastMontlyPayment.disable();
  }

  onSubmit(studentForm: FormGroup) {
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
    // alert('Estudante incluído com sucesso!');
    this.dialog.open(MessageDialogComponent, {
      data: {
        title: 'Inclusão',
        message: 'Estudante incluído com sucesso!'
      }
    });
    this.router.navigateByUrl('/students');

  }

}
