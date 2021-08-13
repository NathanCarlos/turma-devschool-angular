import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';
import * as moment from 'moment';

@Component({
  templateUrl: './create-student-page.component.html',
  styleUrls: ['./create-student-page.component.scss']
})
export class CreateStudentPageComponent implements OnInit {

  student?: Student;

  dateToday = moment().format('YYYY/MM/DD');

  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    monthlyPayment: new FormControl(0, [Validators.required, Validators.min(100), Validators.max(1500)]),
    inclusionDate: new FormControl(this.dateToday),
    lastMontlhyPayment: new FormControl(this.dateToday),
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
    formValue.inclusionDate = this.dateToday;
    formValue.lastMontlhyPayment = this.dateToday;
    this.studentsService.createStudent(formValue)
    .subscribe(() => {
      this.dialog.open(MessageDialogComponent, 
        {
          width: '300px',
          data: { message: 'Estudante incluído com sucesso!'},
        });
      this.router.navigateByUrl('/students');
    }, err => {
      console.log(err);
    });
  }

}
