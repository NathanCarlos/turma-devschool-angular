import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login/login.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [LoginPageComponent]
})
export class LoginModule { }
