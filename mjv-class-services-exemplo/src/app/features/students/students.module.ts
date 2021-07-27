import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentComponent } from './components/student/student.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentDetailsPageComponent } from './pages/student-details-page/student-details-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentComponent,
    StudentsPageComponent,
    StudentDetailsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class StudentsModule { }
