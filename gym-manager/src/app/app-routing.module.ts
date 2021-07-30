import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { RegistrationMemberPageComponent } from './features/login/pages/registration-member-page/registration-member-page.component';
import { RegistrationUserPageComponent } from './features/login/pages/registration-user-page/registration-user-page.component';
import { MemberDetailsPageComponent } from './features/members/pages/member-details-page/member-details-page.component';
import { MembersPageComponent } from './features/members/pages/members-page/members-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'members' },
  { path: 'members', component: MembersPageComponent },
  { path: 'member-details/:id', component: MemberDetailsPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration-user', component: RegistrationUserPageComponent },
  { path: 'registration-member', component: RegistrationMemberPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
