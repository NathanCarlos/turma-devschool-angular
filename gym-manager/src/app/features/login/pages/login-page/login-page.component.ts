import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/features/members/services/members.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  constructor(
    private membersService: MembersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  validateUser(loginForm: NgForm) {
    const value = loginForm.value;
    const member = this.membersService.getMemberByEmailAndPassword(value.email, value.password);
    if(!member) {
      return this.error = true;
    }
    this.router.navigateByUrl('/members');
    return localStorage.setItem('member', JSON.stringify(member));

  }

}
