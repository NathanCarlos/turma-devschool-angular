import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentComponent } from './components/student/student.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentComponent,
    StudentsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StudentsModule { }
