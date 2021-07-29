import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { CreateStudentPageComponent } from './features/students/pages/create-student-page/create-student-page.component';
import { StudentDetailsPageComponent } from './features/students/pages/student-details-page/student-details-page.component';
import { StudentsPageComponent } from './features/students/pages/students-page/students-page.component';
import { AuthGuardGuard } from './shared/guard/auth-guard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'students', component: StudentsPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'student-details/:id', component: StudentDetailsPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'create-student', component: CreateStudentPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
