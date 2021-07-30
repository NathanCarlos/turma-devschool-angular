import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';
import { MembersService } from '../../services/members.service';

@Component({
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent implements OnInit {

  membersList: Array<Member> = [];

  filteredMembersList: Array<Member> = [];

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.membersList = this.membersService.getMembers();
    this.filteredMembersList = this.membersList;
  }

  findMembersByFilter(event: any, type: 'Name' | 'Id') {
    const value = event.target.value;
    if(value.length === 0) {
      return this.filteredMembersList = this.membersList;
    }
    return this.filteredMembersList = type === 'Name' ? this.membersService.getMembersByName(value) : this.membersService.getMembersById(value);
  }

}
