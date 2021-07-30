import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MemberComponent } from './components/member/member.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { MemberDetailsPageComponent } from './pages/member-details-page/member-details-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MemberComponent,
    MemberListComponent,
    MembersPageComponent,
    MemberDetailsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class MembersModule { }
