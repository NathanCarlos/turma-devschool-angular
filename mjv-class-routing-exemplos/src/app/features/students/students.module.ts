import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { StudentComponent } from './components/student/student.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentListComponent } from './components/student-list/student-list.component';


@NgModule({
  declarations: [
    StudentsPageComponent,
    StudentComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StudentsModule { }
