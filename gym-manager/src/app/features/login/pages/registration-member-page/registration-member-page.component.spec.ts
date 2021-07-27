import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMemberPageComponent } from './registration-member-page.component';

describe('RegistrationMemberPageComponent', () => {
  let component: RegistrationMemberPageComponent;
  let fixture: ComponentFixture<RegistrationMemberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationMemberPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMemberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
