import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
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

  constructor(
    private studentsSerive: StudentsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  remove(id?: number) {
    this.studentsSerive.removeStudent(id)
    .subscribe(() => {
      this.dialog.open(MessageDialogComponent, 
        {
          width: '300px',
          data: { message: 'Estudante excluído com sucesso!'},
        });
    }, err => {
      console.log(err);
    });
  }

}
