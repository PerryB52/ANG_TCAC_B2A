import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C33courseComponent } from './c33course.component';

describe('C33courseComponent', () => {
  let component: C33courseComponent;
  let fixture: ComponentFixture<C33courseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C33courseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C33courseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
