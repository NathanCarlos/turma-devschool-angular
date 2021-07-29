import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/features/students/models/student.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  student?: Student;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const studentStorage = sessionStorage.getItem('student');
    if(studentStorage) this.student = JSON.parse(studentStorage);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  exit() {
    sessionStorage.clear();
    this.navigateByUrl('/login');
  }

}
