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
    id: new FormControl(this.student.id),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    monthlyPayment: new FormControl(this.student.monthlyPayment, [Validators.required, Validators.min(100), Validators.max(1500)]),
    inclusionDate: new FormControl(this.student.inclusionDate),
    lastMontlhyPayment: new FormControl(this.student.inclusionDate),
    course: new FormControl('', [Validators.required])
  });

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentForm.controls.inclusionDate.disable();
    this.studentForm.controls.lastMontlhyPayment.disable();
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
      this.student.lastMontlhyPayment,
      this.student.validRegistration,
      formValue.course
    );
    this.studentsService.createStudent(student);
    this.dialog.open(MessageDialogComponent, 
      {
        width: '300px',
        data: { message: 'Estudante incluído com sucesso!'},
      });
    this.router.navigateByUrl('/students');

  }

}
