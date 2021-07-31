import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationMemberPageComponent } from './pages/registration-member-page/registration-member-page.component';
import { RegistrationUserPageComponent } from './pages/registration-user-page/registration-user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationMemberPageComponent,
    RegistrationUserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class LoginModule { }
