import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/dialogs/confirmation-dialog/confirmation-dialog.component';
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

  constructor(private studentsSerive: StudentsService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  remove(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.studentsSerive.removeStudent(id);
        this.dialog.open(MessageDialogComponent, {
          data: {
            title: 'Exclusão',
            message: 'Estudante excluído com sucesso!'
          }
        });
      }
    });
  }

}
