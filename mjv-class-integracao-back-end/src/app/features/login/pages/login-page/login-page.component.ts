import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/features/students/services/students.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  constructor(
    private studentService: StudentsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  validateUser(loginForm: NgForm) {
    this.studentService.getStudentByEmailAndPassword(loginForm.value.email, loginForm.value.password)
    .subscribe((student) => {
      if(!student) {
        return this.error = true;
      }
      this.router.navigateByUrl('students');
      return sessionStorage.setItem('currentStudent', JSON.stringify(student));
    }, err => {
      console.log(err);
      return this.error = true;
    });
  }

}
