import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get<Array<Student>>(this.baseUrl + `students`);
  }

  getStudentByEmailAndPassword(email: string, password: string) {
    return this.httpClient.post<Student>(this.baseUrl + 'students/authenticate', {
      email, password
    });
  }

  getStudentById(id: number) {
    return this.httpClient.get<Student>(this.baseUrl + `students/details/${id}`);
  }

  createStudent(student: Student) {
    return this.httpClient.post<Student>(this.baseUrl + 'students/create', student);
  }

  removeStudent(id?: number) {
    return this.httpClient.delete(this.baseUrl + 'students/remove', {
      body: {
        id
      }
    });
  }

}
