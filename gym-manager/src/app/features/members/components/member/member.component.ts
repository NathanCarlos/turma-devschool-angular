import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Input()
  member?: Member;

  @Input()
  datails: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
