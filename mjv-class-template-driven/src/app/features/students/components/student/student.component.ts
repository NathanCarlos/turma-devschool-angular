import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input()
  student?: Student;

  @Input()
  card: boolean = true;

  constructor(private studentsSerive: StudentsService) { }

  ngOnInit(): void {
  }

  remove(id: number) {
    this.studentsSerive.removeStudent(id);
  }

}
