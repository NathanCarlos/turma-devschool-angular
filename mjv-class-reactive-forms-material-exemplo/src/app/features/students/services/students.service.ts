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
    return this.createStudentObject(
      this.generateNextId(),
      '',
      '',
      '',
      0,
      dateToday,
      dateToday,
      true,
      ''
    );
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

  createStudentObject(
    id: number,
    name: string,
    email: string,
    password: string,
    monthlyPayment: number,
    inclusionDate: Date | string,
    lastMontlyPayment: Date| string,
    validRegistration: boolean,
    course: string,
  ): Student {
    return {
      id,
      name,
      email,
      password,
      monthlyPayment,
      inclusionDate,
      lastMontlyPayment,
      validRegistration,
      course
    };
  }

  removeStudent(id: number) {
    const studentIndex = this.students.findIndex((student) => student.id === Number(id));
    this.students.splice(studentIndex, 1);
  }

  generateNextId(): number {
    return this.students[(this.students.length - 1)].id + 1;
  }
}
