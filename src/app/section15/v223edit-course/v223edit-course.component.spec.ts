import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V223editCourseComponent } from './v223edit-course.component';

describe('V223editCourseComponent', () => {
  let component: V223editCourseComponent;
  let fixture: ComponentFixture<V223editCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V223editCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V223editCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
