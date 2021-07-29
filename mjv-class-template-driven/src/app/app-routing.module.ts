import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { CreateStudentPageComponent } from './features/students/pages/create-student-page/create-student-page.component';
import { StudentDetailsPageComponent } from './features/students/pages/student-details-page/student-details-page.component';
import { StudentsPageComponent } from './features/students/pages/students-page/students-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'students', component: StudentsPageComponent },
  { path: 'student-details/:id', component: StudentDetailsPageComponent },
  { path: 'create-student', component: CreateStudentPageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
