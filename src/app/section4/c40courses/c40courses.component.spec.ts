import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C40coursesComponent } from './c40courses.component';

describe('C40coursesComponent', () => {
  let component: C40coursesComponent;
  let fixture: ComponentFixture<C40coursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C40coursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C40coursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
