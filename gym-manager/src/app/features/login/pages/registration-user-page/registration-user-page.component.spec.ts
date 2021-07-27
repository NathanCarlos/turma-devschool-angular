import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationUserPageComponent } from './registration-user-page.component';

describe('RegistrationUserPageComponent', () => {
  let component: RegistrationUserPageComponent;
  let fixture: ComponentFixture<RegistrationUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
