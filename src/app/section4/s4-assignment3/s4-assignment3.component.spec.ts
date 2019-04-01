import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S4Assignment3Component } from './s4-assignment3.component';

describe('S4Assignment3Component', () => {
  let component: S4Assignment3Component;
  let fixture: ComponentFixture<S4Assignment3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S4Assignment3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S4Assignment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
