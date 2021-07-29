import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import * as moment from 'moment';

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

  constructor() { }

  getDefaultStudent(): Student {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      id: this.generateNextId(),
      name: '',
      email: '',
      password: '',
      monthlyPayment: 0,
      inclusionDate: dateToday,
      lastMontlyPayment: dateToday,
      validRegistration: true,
      course: ''
    }
  }
  getStudents() {
    return this.students;
  }

  getStudentByEmailAndPassword(email: string, password: string) {
    return this.students.find((student) => student.email === email && student.password === password);
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

  createStudent(student: Student) {
    this.students.push(student);
    return this.students;
  }

  generateNextId(): number {
    return this.students[(this.students.length - 1)].id + 1;
  }
}
