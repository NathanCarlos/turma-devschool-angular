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
      password: '123456',
      monthlyPayment: 500,
      inclusionDate: '2021-07-24'
    },
    {
      id: 2,
      name: 'Henrique Silva',
      email: 'henrique@gmail.com',
      password: '123456',
      monthlyPayment: 400,
      inclusionDate: '2021-01-24'
    },
    {
      id: 3,
      name: 'Alan Jhonnes',
      email: 'alan@gmail.com',
      password: '123456',
      monthlyPayment: 450,
      inclusionDate: '2021-06-24'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
