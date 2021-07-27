import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsPageComponent } from './student-details-page.component';

describe('StudentDetailsPageComponent', () => {
  let component: StudentDetailsPageComponent;
  let fixture: ComponentFixture<StudentDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
