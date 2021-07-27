import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  students: Array<Student> = [
    {
      id: 1,
      name: 'Nathan Carlos',
      email: 'nathan@gmail.com',
      password: '123456',
      monthlyPayment: 500,
      inclusionDate: '2021-07-24',
      lastMontlyPayment: '2021-07-24',
      validRegistration: true,
      course: 'Devschool MJV Angular'
    },
    {
      id: 2,
      name: 'Henrique Silva',
      email: 'henrique@gmail.com',
      password: '123456',
      monthlyPayment: 400,
      inclusionDate: '2021-01-24',
      lastMontlyPayment: '2021-06-24',
      validRegistration: true,
      course: 'Devschool MJV Angular'
    },
    {
      id: 3,
      name: 'Alan Jhonnes',
      email: 'alan@gmail.com',
      password: '123456',
      monthlyPayment: 450,
      inclusionDate: '2021-06-24',
      lastMontlyPayment: '2021-06-24',
      validRegistration: true,
      course: 'Devschool MJV Angular'
    }
  ];

  filteredStudents: Array<Student> = [];

  constructor() { }

  ngOnInit(): void {
    this.students = this.getStudents();
    this.filteredStudents = this.students;
  }

  findStudentByFilter(event: any, type: 'Name' | 'Id') {
    const value = event.target.value;
    const students = type === 'Id' ? this.getStudentsByFilterId(value) : this.getStudentsByFilterName(value);
    if(value.length === 0) {
      return this.filteredStudents = this.students;
    }
    return this.filteredStudents = students;
  }

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find((student) => student.id === Number(id));
  }

  getStudentByName(name: string) {
    return this.students.find((student) => student.name === name);
  }

  getStudentsByFilterName(name: string) {
    return this.students.filter((student) => student.name.toUpperCase().search(name.toUpperCase()) > -1);
  }

  getStudentsByFilterId(id: number) {
    const student = this.getStudentById(Number(id));
    if(!student) {
      return [];
    }
    return [student];
  }

}
