import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../models/member.model';
import { MembersService } from '../../services/members.service';

@Component({
  templateUrl: './member-details-page.component.html',
  styleUrls: ['./member-details-page.component.scss']
})
export class MemberDetailsPageComponent implements OnInit {

  member?: Member;

  constructor(
    private activedRoute: ActivatedRoute,
    private membersService: MembersService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.member = this.membersService.getMemberById(params.id);
    });
  }

}
