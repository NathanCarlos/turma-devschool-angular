import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Array<Student> = [
    {
      id: 1,
      name: 'Nathan Carlos',
      email: 'nathan@gmail.com',
      monthlyPayment: 500,
      inclusionDate: '2020-01-01',
      password: '123456'
    },
    {
      id: 2,
      name: 'Matheus Alberto',
      email: 'matheus@gmail.com',
      monthlyPayment: 350,
      inclusionDate: '2020-02-01',
      password: '123456'
    },
    {
      id: 3,
      name: 'Henrique Silva',
      email: 'henrique@gmail.com',
      monthlyPayment: 399,
      inclusionDate: '2020-05-01',
      password: '123456'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
