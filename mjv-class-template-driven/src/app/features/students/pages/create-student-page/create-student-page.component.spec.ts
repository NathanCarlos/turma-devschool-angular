import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentPageComponent } from './create-student-page.component';

describe('CreateStudentPageComponent', () => {
  let component: CreateStudentPageComponent;
  let fixture: ComponentFixture<CreateStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
