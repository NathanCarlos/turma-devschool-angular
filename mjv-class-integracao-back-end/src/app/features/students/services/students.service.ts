import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Array<Student> = [];

  constructor(private httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get<Array<Student>>(environment.baseApiUrl + 'students');
  }

  getStudentByEmailAndPassword(email: string, password: string) {
    return this.httpClient.post<Student>(environment.baseApiUrl + 'students/authenticate', { email, password });
  }

  getStudentById(id: number) {
    return this.httpClient.get<Student>(environment.baseApiUrl + `students/details/${id}`);
  }

  createStudent(student: Student) {
    return this.httpClient.post(environment.baseApiUrl + 'students/create', student);
  }

  removeStudent(id: number) {
    return this.httpClient.delete(environment.baseApiUrl + 'students/remove', {
      body: {
        id
      }
    });
  }

  updateStudent(student: Partial<Student>) {
    return this.httpClient.put(environment.baseApiUrl + 'students/update', student);
  }

}
