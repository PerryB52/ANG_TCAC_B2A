import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S4Assignment2Component } from './s4-assignment2.component';

describe('S4Assignment2Component', () => {
  let component: S4Assignment2Component;
  let fixture: ComponentFixture<S4Assignment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S4Assignment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S4Assignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
