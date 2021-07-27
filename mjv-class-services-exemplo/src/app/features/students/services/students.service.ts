import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

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


  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find((student) => student.id === id);
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
